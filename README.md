npv - Node Package Version
===

Returns the current node package version or name on the command line.

Parameters
---
* **--Version** (DEFAULT) Return the version of the project. Shortcut is **-v**.
* **--name** Return the name of the project. Shortcut is **-a**.

Usage
---

If you've set the package version of your project in the `package.json` as follows:

```json
{
  "name": "my-node-project",
  "version": "1.0.0"
}
```

Just change to your project directory and simply call `npv`

```bash
cd <my-node-project>
npv
1.0.0
```

To get the name of your project use the --name parameter
```bash
cd <my-node-project>
npv --name
my-node-project
```
    
In some cases you may want to work with your package version on the command line. i.e. in a build/deployment pipeline. Some CI platforms support environment variables:
    
```bash
cd <my-node-project>
export PACKAGE_VERSION=$(npv)
echo $PACKAGE_VERSION
```
    
Installation
---

```bash
sudo npm install npv -g
 ```
