module.exports = function(sequelize , DataTypes){

    const NewsFeed = sequelize.define("NewsFeed" , {
        author  : {
            type : DataTypes.STRING,
        },

        message : {
            type : DataTypes.TEXT,
            // allowNull: false
        }

    });

    return NewsFeed;
};
