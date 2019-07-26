# export-examples

Each folder has examples of how you would export framework comopnents into generic web components. Inside each folder there is a `README.md` on the commands, setup, or other items needed in order to complete the task.

## Exporting command

In order to build and export from the folder, run the command `npm run build:wc`.

## `built-output/` folder

The output of the export command will go into this folder. This generally contains dependencies requried and the built web components.

Examples can then pull from this folder to use the web components in a generic way. The contents of this folder are ignored in Git.
