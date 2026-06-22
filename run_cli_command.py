import os
import subprocess
import sys

# Change directory to the expense_agent project directory
project_dir = "/Users/noishey/.gemini/antigravity-ide/scratch/expense_agent"
os.chdir(project_dir)

args = sys.argv[1:]
if not args:
    args = ["info"]

cmd = ["agents-cli"] + args

print(f"Running command: {' '.join(cmd)}")
result = subprocess.run(cmd, capture_output=True, text=True)

print("STDOUT:")
print(result.stdout)
print("STDERR:")
print(result.stderr)
sys.exit(result.returncode)
