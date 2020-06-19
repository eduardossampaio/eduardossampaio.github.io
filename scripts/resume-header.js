Vue.component('resume-header', {
    props: ['profile'],
    template: `
    <header class="resume-header pt-4 pt-md-0">
    <div class="media flex-column flex-md-row">
        <img class="mr-3 img-fluid picture mx-auto" v-bind:src="profile.profile_picture" alt="">
        <div class="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
            <div class="primary-info">
                <h1 class="name mt-0 mb-1 text-white text-uppercase text-uppercase">{{profile.name}}</h1>
                <div class="title mb-3">{{profile.role}}</div>
                <ul class="list-unstyled">
                    <li class="mb-2"><a v-bind:href="'mailto:'+profile.email"><i class="far fa-envelope fa-fw mr-2" data-fa-transform="grow-3"></i>{{profile.email}}</a></li>
                    <li><a href="#"><i class="fas fa-mobile-alt fa-fw mr-2" data-fa-transform="grow-6"></i>{{profile.phone}}</a></li>
                    <li style="margin-top:5px"><a href="#"><i class="fas fa-file-download fa-fw mr-2" data-fa-transform="grow-6"></i>Download</a></li>
                </ul>


            </div>
            <div class="secondary-info ml-md-auto mt-2">
                <ul class="resume-social list-unstyled">

                    <li v-for="link in profile.profile_url" class="mb-3">
                        <a v-bind:href="link.url">
                            <span class="fa-container text-center mr-2">
                                <i v-bind:class="link.icon"></i>
                            </span>{{link.url}}
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    </div>
</header>
    `
  })