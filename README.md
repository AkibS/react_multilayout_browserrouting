It is basically example how to create multiple layout and browser router for routing without # (Avoid ugly URLs). Also solve 404 server router issue after refreshing page for both IIS and Apache server and subdomain hosting.

## Steps to run

### 1. npm install

To install all dependent packages

### 2. npm start

To Run the application.

## How Solve Server Routing 404 refresh issue using Browser Router for IIS

We need to do URL Rewrite implementation for IIS

1. IIS version must me above 6
2. Instll URL Rewrite extension https://www.iis.net/downloads/microsoft/url-rewrite
3. At project root folder or build folder need to create web.config file and it should contain rewrite configuration as per following example

### With Sub Directory
`<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Static Assets" stopProcessing="true">
          <match url="([\S]+[.](html|htm|svg|js|css|png|gif|jpg|jpeg))" />
          <action type="Rewrite" url="/testapp/{R:1}"/>
        </rule>
        <rule name="ReactRouter Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/testapp/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>`

### Without SubDirectory

`<?xml version="1.0" encoding="UTF-8"?>
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Static Assets" stopProcessing="true">
          <match url="([\S]+[.](html|htm|svg|js|css|png|gif|jpg|jpeg))" />
          <action type="Rewrite" url="/{R:1}"/>
        </rule>
        <rule name="ReactRouter Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
  </system.webServer>
</configuration>`


For more details visit https://medium.com/@mateioprea/setting-up-a-react-app-with-react-router-in-iis-71cb86aee376


## How Solve Server Routing 404 refresh issue using Browser Router for Apache 

1. Create .htaccess file to app's directory if not present
2. Add following 4 lines to it

### With Sub Directory

`Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ /testapp/index.html [QSA,L]`

### Without Sub Directory

`Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]`

for more details visit https://www.andreasreiterer.at/fix-browserrouter-on-apache/


