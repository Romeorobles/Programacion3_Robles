# COMANDOS GIT

Visualizar status de cambios
```
git status
```

Incluir al stage
```
git add .
git add archivo_especifico.py
```
Comprometer o seleccionar cambios para subir al repositorio remoto
```
git commit -m 'comentario'
```

Establecer Configuracones basicas
```
git config --global user.name "nombre de usuario de git"
git config --global user.email "email de git"
git config --global core.editor "code --wait"
git config --global color.ui auto
git config --global init.defaultBranch main
```
Consultar Configuraciones
```
git config --list I
git config user.name
git config user.email
```




```
Consultar LOgs



git log
git log --oneline
git config user.email

git log --start
git log -p
git log -- oneline -10 sirve para que la rama nos muestre los registros del numero ingresado en este caso son 10
git log --author="isrraelrobles742@gmail.com"


### por fecha
git log --after="2026-01-01"
git log --before="2026-04-01"
git log --after="2026-01-01" before="2026-04-01"

git show  aqui van unos numeros pero no se que es parece un token  --name-only
git show aqui lo mismo ajjajaja --statr
git tambirn:services/order_servicer.py
git ls-tree nuemros otra vez

```




```
Modificar el ultimo commit
git commit --amend -m "feat: modificado"
git commit --amend -m "feat: modificado"


```