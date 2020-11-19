module.exports = (sequelize, DataTypes) => {
    const comentarios = sequelize.define("comentarios", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: DataTypes.STRING
    })
    return comentarios;
};
