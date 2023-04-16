import AuthorizedBlock from "../database/models/authorized-block";

async function getAll() {
    return AuthorizedBlock.findAll();
}

async function getByIdentifier(identifier: string) {
    return await AuthorizedBlock.findOne({ where: { identifier }});
}

export {
    getAll,
    getByIdentifier,
}
