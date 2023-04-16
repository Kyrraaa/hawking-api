const { DataTypes, Model } = require('sequelize')
import sequelize from "../instance"
import AuthorizedBlock from "./authorized-block";
import Player from "./player";

class PlayerHasAuthorizedBlock extends Model {}

PlayerHasAuthorizedBlock.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    count: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'players_has_authorized_blocks',
    tableName: 'players_has_authorized_blocks',
    timestamps: false,
    underscored: true
});

// Player.hasMany(PlayerHasAuthorizedBlock, { foreignKey: 'player_id', allowNull: false });
// AuthorizedBlock.hasMany(PlayerHasAuthorizedBlock, { foreignKey: 'block_id', allowNull: false });

Player.belongsToMany(AuthorizedBlock, {
    through: PlayerHasAuthorizedBlock,
    foreignKey: 'player_id'
});

AuthorizedBlock.belongsToMany(Player, {
    through: PlayerHasAuthorizedBlock,
    foreignKey: 'block_id'
});

export default PlayerHasAuthorizedBlock;
