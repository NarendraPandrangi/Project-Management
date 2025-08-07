# user.py - User routes
from flask import Blueprint, request, jsonify
from db import cursor, db

user_bp = Blueprint('user', __name__)

@user_bp.route("/create", methods=["POST"])
def create_user():
    data = request.json
    username = data.get("username")

    cursor.execute("INSERT INTO users (username) VALUES (%s)", (username,))
    db.commit()
    return jsonify({"message": "User created"})

@user_bp.route("/list", methods=["GET"])
def list_users():
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    return jsonify(users)
