module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('todo',
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      tags: {
        type: DataTypes.STRING(100),
      },
      createdAt: {
        type: DataTypes.DATE,
        //allowNull: false,
        defalutValue: sequelize.literal('now()'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        //allowNull: false,
        defalutValue: sequelize.literal('now()'),
      }
    }, 
    {
      timestamps: true
    }
    )

  
    
    return Todo;
  };