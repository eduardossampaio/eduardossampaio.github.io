// const axios = require('axios');

var app = new Vue({
    el: '#app',
    data: {
        response: 'dgs',
      message: 'Hello Vue!',
      resume:{},
      profile:{}
    },
    methods: {
        getContent: function() {
            console.log('get content');
            var app = this;
            axios.get('https://raw.githubusercontent.com/eduardossampaio/metadata/master/resume/pt_BR/resume.json',{
                transformResponse: [function (data) {
                    return JSON.parse(data);
                  }],
            })
              .then(function (response) {

                // app.response = response.data;

                app.resume = response.data
                // console.log(app.resume)
                // this.profile = this.resume;
              })
              .catch(function (error) {
                console.log(error);
              })
        },

    },
    mounted : function() {
        this.getContent();

    },
  })

