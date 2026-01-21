import os
import shutil
from datetime import datetime
import subprocess
import sys

# Configuration
DB_FILE = "recall_database_v3.csv"
ARCHIVE_DIR = "archives"
SYNC_SCRIPT = "csv_to_js.py"

def safe_print(msg):
    try:
        print(msg)
    except:
        try:
            print(msg.encode('utf-8', errors='replace').decode('gbk', errors='replace'))
        except:
            print(msg.encode('ascii', errors='replace').decode('ascii'))

def archive_and_sync():
    safe_print(f"--- Starting Daily Sync: {datetime.now().strftime('%Y-%m-%d')} ---")
    
    # 1. Check if DB exists
    if not os.path.exists(DB_FILE):
        safe_print(f"Error: {DB_FILE} not found!")
        sys.exit(1)

    # 2. Create archive snapshot
    timestamp = datetime.now().strftime("%Y_%m_%d")
    archive_name = f"data_{timestamp}.csv"
    archive_path = os.path.join(ARCHIVE_DIR, archive_name)
    
    try:
        shutil.copy2(DB_FILE, archive_path)
        safe_print(f"✅ Archived snapshot to: {archive_path}")
    except Exception as e:
        safe_print(f"❌ Failed to archive: {str(e)}")
        sys.exit(1)

    # 3. Trigger JS generation
    try:
        safe_print("🔄 Regenerating JS database...")
        result = subprocess.run(["python", SYNC_SCRIPT], capture_output=True, text=True, encoding='utf-8', errors='replace')
        if result.returncode == 0:
            safe_print(result.stdout)
            safe_print("✅ JS Database (js/data_v4_1.js) successfully synchronized.")
        else:
            safe_print(f"❌ Error in sync script: {result.stderr}")
            sys.exit(1)
    except Exception as e:
        safe_print(f"❌ Failed to run sync script: {str(e)}")
        sys.exit(1)

    # 4. Cleanup old archives (Keep last 30 days)
    archives = sorted([f for f in os.listdir(ARCHIVE_DIR) if f.startswith("data_")])
    if len(archives) > 30:
        for old_file in archives[:-30]:
            os.remove(os.path.join(ARCHIVE_DIR, old_file))
            safe_print(f"🗑️ Deleted old archive: {old_file}")

    safe_print("--- Sync Complete ---")

if __name__ == "__main__":
    archive_and_sync()
