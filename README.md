


# Instalation
1.- Install Node: https://nodejs.org/es/download/

2.- Install Nx CLI: https://nx.dev/getting-started/intro

3.- Install Angular CLI: https://angular.io/guide/setup-local

4.- Download dependency package 
``` npm i ```

5.- Run front-end ```  npx nx serve meli-ui --configuration=development ```, default application uri ``` http://localhost:4200/ ```

6.- Run back-end ```  npx nx serve meli-api  ```, default ingress path ``` http://localhost:3333/api ```




# Features front-end (folder: apps/meli-ui):
 - Angular 13 Framework (https://angular.io/)
 - Monorepo (https://nx.dev/)
 - MVC design pattern
 - Project structure according to style guide (https://angular.io/guide/styleguide)
 - Performance: Lazy loading design pattern (https://angular.io/guide/lazy-loading-ngmodules)
 - Library with shared entities between back-end and front-end (folder: libs/meli-entity)

# Features back-end (folder: apps/meli-api)
- NestJs 14 Framework (node con typescrypt https://docs.nestjs.com/)
- Monorepo (https://nx.dev/)
- Clean architecture design pattern
- Library with shared entities between back-end and front-end (folder: libs/meli-entity)

