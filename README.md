"/" path to add user.
"/user" path to see users list.

ejs: Selected template engine for the Assignment.

First, it uses the Normal HTML rather than using minimal version of it like in "pug" template engine.

Second, we get this placeholders which allows us to use javascript in them. I find it way better then "handlebars" engine.

Third, we don't have to define ejs as we have to do it with the handlebars. I found, we have to define extname, defaultLayout properties even though we are not using the layouts to inherit in the next handlebars file.