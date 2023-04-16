const { DataTypes, Model } = require('sequelize')
import sequelize from "../instance"

class AuthorizedBlock extends Model {}

AuthorizedBlock.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    identifier: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'authorized_blocks',
    tableName: 'authorized_blocks',
    timestamps: false,
    underscored: true
});

export default AuthorizedBlock;
