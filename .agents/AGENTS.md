<RULE[workspace]>

## Safe File Editing Rule (Windows PowerShell Environment)
NEVER use terminal commands (like `cat`, `echo`, `grep`, `sed`) or file redirection (`>`) to modify or create files. This project is running in a Windows PowerShell environment, and bash-style redirection will instantly truncate files to 0 bytes before reading them, resulting in permanent code loss.
ALWAYS use the native agentic IDE tools (`replace_file_content` or `multi_replace_file_content`) to modify code.

</RULE[workspace]>
