
Vue.component('resume-awards', {
    props: ['resume'],
    template:
`
    <section class="resume-section reference-section mb-5">
    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Awards</h2>
    <div class="resume-section-content">
        <ul class="list-unstyled resume-awards-list">
            <li v-for="award  in resume.awards" class="mb-2 pl-4 position-relative">
                <i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
                <div class="resume-award-name">{{award.name}}</div>
                <div v-if="award.description" class="resume-award-desc">{{award.description}}</div>
            </li>
        </ul>
    </div>
</section>
`

});






