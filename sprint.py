# sprint.py - Sprint routes
from flask import Blueprint, request, jsonify
from db import cursor, db

sprint_bp = Blueprint('sprint', __name__)

@sprint_bp.route("/create", methods=["POST"])
def create_sprint():
    data = request.json
    name = data.get("name")
    project_id = data.get("project_id")

    cursor.execute("INSERT INTO sprints (name, project_id) VALUES (%s, %s)", (name, project_id))
    db.commit()
    return jsonify({"message": "Sprint created successfully"})
