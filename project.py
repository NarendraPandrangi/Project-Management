# project.py - Project routes
from flask import Blueprint, request, jsonify
from db import cursor, db

project_bp = Blueprint('project', __name__)

@project_bp.route("/create", methods=["POST"])
def create_project():
    data = request.json
    name = data.get("name")

    cursor.execute("INSERT INTO projects (name) VALUES (%s)", (name,))
    db.commit()
    return jsonify({"message": "Project created successfully"})
