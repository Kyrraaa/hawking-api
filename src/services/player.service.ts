import AuthorizedBlock from "../database/models/authorized-block";
import Player from "../database/models/player";
import PlayerHasAuthorizedBlock from "../database/models/player-has-authorized-block";

async function getAll() {
    return Player.findAll();
}

async function getByUuid(uuid: string) {
    let player = await Player.findOne(
        {
            where: { uuid },
        });

    if (player === null) {
        player = await getByUsername(uuid)
    }

    return player;
}

async function getByUsername(username: string) {
    return await Player.findOne(
        {
            where: { username },
        }
    );
}

async function getBlockByPlayerUuid(uuid: string) {
    let player = await Player.findOne({
        where: { uuid },
        include : {
            model: AuthorizedBlock,
            through: {
                model: PlayerHasAuthorizedBlock,
                attributes: ['count'],
                as: 'data'
            }
        }
    })

    if (player === null) {
        player = await Player.findOne({
            where: { username: uuid },
            include : {
                model: AuthorizedBlock,
                through: {
                    model: PlayerHasAuthorizedBlock,
                    attributes: ['count'],
                    as: 'data'
                }
            }
        })
    }
    return player
}

export {
    getAll,
    getByUuid,
    getByUsername,
    getBlockByPlayerUuid
}
