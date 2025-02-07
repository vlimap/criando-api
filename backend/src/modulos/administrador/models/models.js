const { DataTypes, Sequelize } = require('sequelize');
const moment = require('moment-timezone');
const sequelize = require('../../../config/configBD');
const bcrypt = require('bcryptjs');

const Administrador = sequelize.define('Administrador', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'O nome é obrigatório!'
            },
            len: {
                args: [3, 50],
                msg: 'O nome deve ter no mínimo 3 caracteres e no máximo 50'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'O e-mail já existe!'
        },
        validate: {
            isEmail: {
                msg: 'Forneça um e-mail válido!'
            }
        }
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 11],
                msg: 'O telefone deve ter no mínimo 8 e no máximo 11 dígitos!'
            }
        }
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            msg: 'O CPF já existe!'
        },
        validate: {
            is: {
                args: [/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/],//123.456.789-12
                msg: 'CPF inválido!'
            }
        }
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Endereço não pode ser vazio!'
            }
        }
    },
    data_cadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')

    },
    data_nascimento: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isAfter: {
                args: ['1900-01-01'],
                msg: 'Não é permitido data de nascimento antes de 1900-01-01 '
            },
            isBefore: {
                args: [moment().tz('America/Recife').format('YYYY-MM-DD')],
                msg: 'Não é permitido data de nascimento apos a data atual'
            }
        }
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('ativo', 'inativo'),
        defaultValue: 'ativo',
        allowNull: false,
        validate:{
            isIn:{
                args:[["ativo", "inativo"]],
                msg: "Valor invalido!"
            }
        }
    },
    foto_perfil: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "../../upload/default.webp",
        validate:{
            isPathValid(value){
                if( value && !/\.(jpg|jpeg|png|svg|gif|webp)$/i.test(value)){
                    throw  Error('Formato de imagem invalido');
                }
            }
        }
    }
}, {
    hooks: {
        beforeCreate: async (administrador) => {
            if (administrador.senha) {
                if (administrador.senha.length < 8 || administrador.senha.length > 15) {
                    throw new Error('A senha deve ter no mínimo 8 e no máximo 15 caracteres');
                }
                const salt = await bcrypt.genSalt(10);
                administrador.senha = await bcrypt.hash(administrador.senha, salt);
            }
        },
        beforeUpdate: async (administrador) => {
            if (administrador.changed('senha')) {
                if (administrador.senha.length < 8 || administrador.senha.length > 15) {
                    throw new Error('A senha deve ter no mínimo 8 e no máximo 15 caracteres');
                }
                const salt = await bcrypt.genSalt(10);
                administrador.senha = await bcrypt.hash(administrador.senha, salt);
            }
        }
    },
    sequelize,
    modelName: 'Administrador',
    tableName: 'Administrador',
    timestamps: false // Cria coluna createdAt updateAt
});

module.exports = Administrador;
