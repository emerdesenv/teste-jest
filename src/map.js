function extrairTitulos(posts) {
    if(!Array.isArray(posts)) {
        throw new Error('A entrada precisa ser um array de objetos');
    }

    return posts.map(post => post.title);
}

module.exports = { extrairTitulos };