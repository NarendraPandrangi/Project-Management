# db.py
# Database connection and setup
import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="naren",
    password="naren@2005",
    database="task_management"
)

cursor = db.cursor(dictionary=True)
