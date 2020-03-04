module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment',
    {
      contents: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      createdAt: {
        type: DataTypes.DATE,
        //allowNull: false,
        defalutValue: Date.now,
      },
      updatedAt: {
        type: DataTypes.DATE,
        //allowNull: false,
        defalutValue: Date.now,
      },
    }, 
    {
      timestamps: true
    }
    )
    
    return Comment;
  };