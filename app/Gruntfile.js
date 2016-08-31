"use strict";
var LIVERELOAD_PORT, lrSnippet, mountFolder;
LIVERELOAD_PORT = 35738;
lrSnippet = require("connect-livereload")({
  port: LIVERELOAD_PORT
});
mountFolder = function(connect, dir) {
  return connect.static(require("path").resolve(dir));
};
var vendor = [
        "client/bower_components/jquery/dist/jquery.min.js",
        "client/bower_components/angular/angular.min.js",
        "client/bower_components/angular-route/angular-route.min.js",
        "client/bower_components/angular-ui-router/release/angular-ui-router.min.js",
        "client/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "client/bower_components/jquery-steps/build/jquery.steps.min.js",
        "client/bower_components/angular-resource/angular-resource.min.js",
        "client/bower_components/angular-ui-notification/dist/angular-ui-notification.js",
        "client/bower_components/toastr/toastr.min.js",
        "client/bower_components/ng-file-upload/ng-file-upload.min.js",
        "client/bower_components/spin.js/spin.min.js",
        "client/bower_components/angular-spinner/angular-spinner.min.js",
        "client/bower_components/moment/moment.js",
        "client/bower_components/angular-moment/angular-moment.min.js",
        "client/bower_components/moment/min/moment-with-locales.min.js",
        "client/bower_components/moment-picker/dist/angular-moment-picker.min.js",
        "client/bower_components/angular-auto-focus/angular-auto-focus.js",
        "client/bower_components/ng-tags-input/ng-tags-input.min.js",
        "client/bower_components/angular-ui-mask/dist/mask.min.js",
        "client/bower_components/angular-base64-upload/dist/angular-base64-upload.min.js",
        "client/bower_components/sweetalert/dist/sweetalert.min.js",
        "client/bower_components/ngSweetAlert/SweetAlert.min.js",
        "client/bower_components/angular-confirm-modal/angular-confirm.min.js",
        "scripts/vendors/jquerytable/jquery-1.11.3.min.js",
        "scripts/vendors/jquerytable/jquery-1.12.0.min.js",
        "scripts/vendors/jquerytable/jquery.dataTables.min.js",
        "scripts/vendors/jquerytable/FixedColumns.js",
        "scripts/vendors/jquerytable/dataTables.colReorder.js",
        "scripts/vendors/jquerytable/ColVis.js",
        "scripts/vendors/jquerytable/colResize.js",
        "scripts/vendors/jquerytable/column_operation.js",
        "scripts/vendors/jquerytable/draw_datatable.js",
        "scripts/vendors/jquerytable/dataTables.tableTools.js"
];
var modFiles = [
        "client/scripts/app.js",
        "client/scripts/shared/main.js",
        "client/scripts/shared/directives.js",
        "client/scripts/shared/localize.js",
        "client/scripts/shared/Nav.js",
        "client/scripts/Task/Task.js",
        "client/scripts/shared/FormDirective.js",
        "client/scripts/shared/common.module.js",
        "client/scripts/UserManagement/account.module.js",
        "client/scripts/Password/password.module.js",
        "client/scripts/Facility/facility.module.js",
        "client/scripts/Tenant/tenant.module.js",
        "client/scripts/Patient/patient.module.js",
        "client/scripts/Provider/provider.module.js",
        "client/scripts/Radiologist/radiologist.module.js",
        "client/scripts/User/user.module.js",
        "client/scripts/BodyPart/bodypart.module.js",
        "client/scripts/Exam/exam.module.js",
        "client/scripts/Payer/payer.module.js",
        "client/scripts/van/van.module.js",
        "client/scripts/Affiliat/affiliat.module.js",
        "client/scripts/Cpt/cpt.module.js",
        "client/scripts/Icd/icd.module.js",
        "client/scripts/Technologist/technologist.module.js",
        "client/scripts/Requisition/requisition.module.js",
        "client/scripts/Message/message.module.js",
        "client/scripts/Profile/profile.module.js",
        "client/scripts/Masterdata/masterdata.module.js",
        "client/scripts/ReviewSystem/reviewsystem.module.js",
        "client/scripts/Dashboard/dashboard.module.js",
        "client/scripts/Account/activateaccount.module.js"
    ];
var userFiles = [
        "client/scripts/shared/common.service.js",
        "client/scripts/UserManagement/account.route.js",
        "client/scripts/UserManagement/account.service.js",
        "client/scripts/UserManagement/account.controller.js",
        "client/scripts/Password/password.route.js",
        "client/scripts/Password/password.service.js",
        "client/scripts/Password/password.controller.js",
        "client/scripts/Facility/facility.route.js",
        "client/scripts/Facility/facility.service.js",
        "client/scripts/Facility/facility.controller.js",
        "client/scripts/Tenant/tenant.route.js",
        "client/scripts/Tenant/tenant.service.js",
        "client/scripts/Tenant/tenant.controller.js",
        "client/scripts/Patient/patient.route.js",
        "client/scripts/Patient/patient.service.js",
        "client/scripts/Patient/patient.controller.js",
        "client/scripts/Provider/provider.route.js",
        "client/scripts/Provider/provider.service.js",
        "client/scripts/Provider/provider.controller.js",
        "client/scripts/Radiologist/radiologist.route.js",
        "client/scripts/Radiologist/radiologist.service.js",
        "client/scripts/Radiologist/radiologist.controller.js",
        "client/scripts/User/user.route.js",
        "client/scripts/User/user.service.js",
        "client/scripts/User/user.controller.js",
        "client/scripts/BodyPart/bodypart.route.js",
        "client/scripts/BodyPart/bodypart.service.js",
        "client/scripts/BodyPart/bodypart.controller.js",
        "client/scripts/Exam/exam.route.js",
        "client/scripts/Exam/exam.service.js",
        "client/scripts/Exam/exam.controller.js",
        "client/scripts/Payer/payer.route.js",
        "client/scripts/Payer/payer.service.js",
        "client/scripts/Payer/payer.controller.js",
        "client/scripts/van/van.route.js",
        "client/scripts/van/van.service.js",
        "client/scripts/van/van.controller.js",
        "client/scripts/Affiliat/affiliat.route.js",
        "client/scripts/Affiliat/affiliat.service.js",
        "client/scripts/Affiliat/affiliat.controller.js",
        "client/scripts/Cpt/cpt.route.js",
        "client/scripts/Cpt/cpt.service.js",
        "client/scripts/Cpt/cpt.controller.js",
        "client/scripts/Icd/icd.route.js",
        "client/scripts/Icd/icd.service.js",
        "client/scripts/Icd/icd.controller.js",
        "client/scripts/Technologist/technologist.route.js",
        "client/scripts/Technologist/technologist.service.js",
        "client/scripts/Technologist/technologist.controller.js",
        "client/scripts/Requisition/requisition.route.js",
        "client/scripts/Requisition/requisition.service.js",
        "client/scripts/Requisition/requisition.controller.js",
        "client/scripts/Message/message.route.js",
        "client/scripts/Message/message.service.js",
        "client/scripts/Message/message.controller.js",
        "client/scripts/Profile/profile.route.js",
        "client/scripts/Profile/profile.service.js",
        "client/scripts/Profile/profile.controller.js",
        "client/scripts/Masterdata/masterdata.route.js",
        "client/scripts/Masterdata/masterdata.service.js",
        "client/scripts/Masterdata/masterdata.controller.js",
        "client/scripts/ReviewSystem/reviewsystem.route.js",
        "client/scripts/ReviewSystem/reviewsystem.service.js",
        "client/scripts/ReviewSystem/reviewsystem.controller.js",
        "client/scripts/Dashboard/dashboard.route.js",
        "client/scripts/Dashboard/dashboard.service.js",
        "client/scripts/Dashboard/dashboard.controller.js",
        "client/scripts/Account/activateaccount.route.js",
        "client/scripts/Account/activateaccount.service.js",
        "client/scripts/Account/activateaccount.controller.js"
];
var vendorCss =[
        "client/bower_components/weather-icons/css/weather-icons.min.css",
        "client/bower_components/angular-ui-notification/dist/angular-ui-notification.min.css",
        "client/bower_components/moment-picker/dist/angular-moment-picker.min.css",
        "client/styles/bootstrap.css",
        "styles/vendor/jquerytable/bootstrap3.min.css",
        "bower_components/sweetalert/dist/sweetalert.css",
        "styles/vendor/jquerytable/jquery.dataTables.min.css",
        "styles/vendor/jquerytable/fixedColumns.dataTables.min.css",
        "styles/vendor/jquerytable/colReorder.dataTables.css",
        "styles/vendor/jquerytable/dataTables.colVis.min.css",
        "styles/vendor/jquerytable/init.css",
        "styles/vendor/jquerytable/dataTables.tableTools.css"
];
var customeCss =[
        "client/styles/ui.css",
        "client/styles/main.css",
        "client/styles/mobileris.css"
];
module.exports = function(grunt) {
  var yeomanConfig;
  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);
  yeomanConfig = {
    app: "client",
    dist: "dist",
    docs: "documentation"
  };
  try {
    yeomanConfig.app = require("./bower.json").appPath || yeomanConfig.app;
  } catch (_e) {}
  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      coffee: {
        files: ["<%= yeoman.app %>/scripts/**/*.coffee"],
        tasks: ["coffee:dist"]
      },
      compass: {
        files: ["<%= yeoman.app %>/styles/**/*.{scss,sass}"],
        tasks: ["compass:server"]
      },
      less: {
        files: ["<%= yeoman.app %>/styles-less/**/*.less"],
        tasks: ["less:server"]
      },
      jade: {
        files: ["<%= yeoman.docs %>/jade/*.jade"],
        tasks: ["jade:docs"]
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: ["<%= yeoman.app %>/index.html", "<%= yeoman.app %>/views/**/*.html", "<%= yeoman.app %>/styles/**/*.css","<%= yeoman.app %>/styles/*.css", "<%= yeoman.app %>/styles-less/**/*.less", ".tmp/styles/**/*.css", "{.tmp,<%= yeoman.app %>}/scripts/**/*.js", "<%= yeoman.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}", "<%= yeoman.docs %>/jade/*.jade"]
      }
    },
    connect: {
      options: {
        port: 9000,
        hostname: "10.235.4.32"
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [lrSnippet, mountFolder(connect, ".tmp"), mountFolder(connect, yeomanConfig.app)];
          }
        }
      },
      docs: {
        options: {
          middleware: function(connect) {
            return [lrSnippet, mountFolder(connect, yeomanConfig.docs)];
          }
        }
      },
      test: {
        options: {
          middleware: function(connect) {
            return [mountFolder(connect, ".tmp"), mountFolder(connect, "test")];
          }
        }
      },
      dist: {
        options: {
          middleware: function(connect) {
            return [mountFolder(connect, yeomanConfig.dist)];
          }
        }
      }
    },
    open: {
      server: {
        url: "http://<%= connect.options.hostname %>:<%= connect.options.port %>"
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [".tmp", "<%= yeoman.dist %>/*", "!<%= yeoman.dist %>/.git*"]
          }
        ]
      },
      all: [".tmp", ".sass-cache", ".DS_Store", "client/bower_components", "documentation/jade", "documentation/config.codekit", "landing/jade", "landing/config.codekit", "node_modules", ".git"],
      server: ".tmp"
    },
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ["Gruntfile.js", "<%= yeoman.app %>/scripts/**/*.js"]
    },
    jade: {
      docs: {
        options: {
          pretty: true
        },
        files: {
          "<%= yeoman.docs %>/index.html": ["<%= yeoman.docs %>/jade/index.jade"]
        }
      }
    },
    compass: {
      options: {
        sassDir: "<%= yeoman.app %>/styles",
        cssDir: ".tmp/styles",
        generatedImagesDir: ".tmp/styles/ui/images/",
        imagesDir: "<%= yeoman.app %>/styles/ui/images/",
        javascriptsDir: "<%= yeoman.app %>/scripts",
        fontsDir: "<%= yeoman.app %>/fonts",
        importPath: "<%= yeoman.app %>/bower_components",
        httpImagesPath: "styles/ui/images/",
        httpGeneratedImagesPath: "styles/ui/images/",
        httpFontsPath: "fonts",
        relativeAssets: true
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          debugInfo: false,
          noLineComments: true
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      },
      forvalidation: {
        options: {
          debugInfo: false,
          noLineComments: false
        }
      }
    },
    less: {
      server: {
        options: {
          strictMath: true,
          dumpLineNumbers: true,
          sourceMap: true,
          sourceMapRootpath: "",
          outputSourceFiles: true
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/styles-less",
            src: "main.less",
            dest: ".tmp/styles",
            ext: ".css"
          }
        ]
      },
      dist: {
        options: {
          cleancss: true,
          report: 'min'
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/styles-less",
            src: "main.less",
            dest: ".tmp/styles",
            ext: ".css"
          }
        ]
      }
    },
    coffee: {
      server: {
        options: {
          sourceMap: true,
          sourceRoot: ""
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/scripts",
            src: "**/*.coffee",
            dest: ".tmp/scripts",
            ext: ".js"
          }
        ]
    },
    dist: {
        options: {
          sourceMap: false,
          sourceRoot: ""
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/scripts",
            src: "**/*.coffee",
            dest: ".tmp/scripts",
            ext: ".js"
          }
        ]
      }
    },
    useminPrepare: {
      html: "<%= yeoman.app %>/index.html",
      options: {
        dest: "<%= yeoman.dist %>",
        flow: {
          steps: {
            js: ["concat"],
            css: ["cssmin"]
          },
          post: []
        }
      }
    },
    usemin: {
      html: ["<%= yeoman.dist %>/**/*.html", "!<%= yeoman.dist %>/bower_components/**"],
      css: ["<%= yeoman.dist %>/styles/**/*.css"],
      options: {
        dirs: ["<%= yeoman.dist %>"]
      }
    },
    htmlmin: {
      dist: {
        options: {},
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>",
            src: ["*.html", "views/*.html"],
            dest: "<%= yeoman.dist %>"
          }
        ]
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "<%= yeoman.app %>",
            dest: "<%= yeoman.dist %>",
            src: ["favicon.ico","fonts/**/*", "i18n/**/*", "images/**/*", "styles/fonts/**/*", "styles/img/**/*", "styles/ui/images/*", "views/**/*"]
          }, {
            expand: true,
            cwd: ".tmp",
            dest: "<%= yeoman.dist %>",
            src: ["styles/**", "assets/**"]
          }, {
            expand: true,
            cwd: ".tmp/images",
            dest: "<%= yeoman.dist %>/images",
            src: ["generated/*"]
          }
        ]
      },
      styles: {
        expand: true,
        cwd: "<%= yeoman.app %>/styles",
        dest: ".tmp/styles/",
        src: "**/*.css"
      }
    },
    concurrent: {
      server: ["coffee:server", "compass:server", "copy:styles"],
      dist: ["coffee:dist", "compass:dist", "copy:styles", "htmlmin"],
      lessServer: ["coffee:server", "less:server", "copy:styles"],
      lessDist: ["coffee:dist", "less:dist", "copy:styles", "htmlmin"]
    },
    cssmin: {
      options: {
        keepSpecialComments: '0'
      },
      dist: {
          files: {
              "<%= yeoman.dist %>/styles/vendor.css": vendorCss,
              "<%= yeoman.dist %>/styles/custome.css": customeCss
          }
      }
    },
    concat: {
      options: {
        separator: grunt.util.linefeed + ';' + grunt.util.linefeed
      },
      dist: {}
    },
    uglify: {
      options: {
        mangle: false,
        compress: {
          drop_console: true
        }
      },
      dist: {
        files: {
            "<%= yeoman.dist %>/scripts/vendor.js": vendor,
            "<%= yeoman.dist %>/scripts/allModules.js": modFiles,
            "<%= yeoman.dist %>/scripts/restFiles.js": userFiles
        }
      }
    }
  });
  grunt.registerTask("docs", function() {
    return grunt.task.run(["jade:docs", "connect:docs", "open", "watch"]);
  });
  grunt.registerTask("server", function(target) {
    if (target === "dist") {
      return grunt.task.run(["serve:dist"]);
    }
    return grunt.task.run(["serve"]);
  });
  grunt.registerTask("serve", function(target) {
    if (target === "dist") {
      return grunt.task.run(["build", "open", "connect:dist:keepalive"]);
    }
    return grunt.task.run(["clean:server", "concurrent:server", "connect:livereload", "open", "watch"]);
  });
  grunt.registerTask("mobilerisserver", function(target) {
    if (target === "dist") {
      return grunt.task.run(["open", "connect:dist:keepalive"]);
    }
    return grunt.task.run(["clean:server", "concurrent:server", "connect:livereload", "open", "watch"]);
  });
  grunt.registerTask("build", ["clean:dist", "useminPrepare", "concurrent:dist", "copy:dist", "cssmin", "concat", "uglify", "usemin"]);
  grunt.registerTask("mobilerisbuild", ["clean:dist","concurrent:dist","copy:dist","cssmin","concat","uglify"]);
  grunt.registerTask("testbuild", ["clean:dist","concurrent:dist","copy:dist","cssmin","concat","uglify"]);
  return grunt.registerTask("default", ["server"]);
};