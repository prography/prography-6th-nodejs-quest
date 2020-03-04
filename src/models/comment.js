module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('comment',
    {
      contents: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      }
    }, 
    {
      timestamps: true
    }
    )
    
    return Comment;
  };