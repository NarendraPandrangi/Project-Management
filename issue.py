# issue.py - Issue routes
from flask import Blueprint, request, jsonify
from db import cursor, db

issue_bp = Blueprint('issue', __name__)

@issue_bp.route("/create", methods=["POST"])
def create_issue():
    data = request.json
    title = data.get("title")
    description = data.get("description")
    sprint_id = data.get("sprint_id")
    assigned_to = data.get("assigned_to")

    cursor.execute("""
        INSERT INTO issues (title, description, sprint_id, assigned_to)
        VALUES (%s, %s, %s, %s)
    """, (title, description, sprint_id, assigned_to))
    db.commit()
    return jsonify({"message": "Issue created and assigned"})
