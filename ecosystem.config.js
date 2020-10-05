module.exports = {
  apps: [
    {
      name: "Myapp",
      script: "app.js",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],

  deploy: {
    production: {
      user: "debian",
      host: "192.168.1.185",
      ref: "origin/master",
      repo: "https://github.com/Kal9Isa/test.git",
      path: "/home/debian/projects/fota/",
      ssh_options: ["ForwardAgent=yes", "StrictHostKeyChecking=no"],
      "pre-setup": "npm install -g pm2@latest",
      "pre-deploy-local": "echo 'This is a local executed command'",
      "post-deploy": "npm install && ./startup-pm2.sh",
    },
  },
};
