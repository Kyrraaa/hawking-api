const { DataTypes, Model } = require('sequelize')
import sequelize from "../instance"

class Player extends Model {}

Player.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    uuid: {
        type: DataTypes.STRING(36),
        allowNull: false,
        unique: true
    },
    username: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    last_login_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'player',
    tableName: 'players',
    timestamps: false,
    underscored: true
});

export default Player;
