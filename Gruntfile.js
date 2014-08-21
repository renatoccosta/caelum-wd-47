module.exports = function(grunt) {
    grunt.initConfig({
        clean: {
            tudo: ["tudo"]
        },
        copy: {
            projeto: {
                cwd: "loja",
                src: "**",
                dest: "dist",
                expand: true
            }
        },
        useminPrepare: {
            html: ["dist/**/*.html"]
        },
        usemin: {
            html: ["dist/**/*.html"]
        },
        watch: {
            options: {
                livereload: true
            },
            todos: {
                files: ["loja/**/*"]
            }
        },
        connect: {
            server: {
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask("minifica", ["useminPrepare", "usemin", "concat", "uglify", "cssmin"]);
    grunt.registerTask("default", ["clean", "copy", "minifica"]);
    grunt.registerTask("run", ["connect", "watch"]);

    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-usemin");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
};
