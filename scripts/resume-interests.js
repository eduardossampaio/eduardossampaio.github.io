
Vue.component('resume-interests', {
    props: ['resume'],
    template:
    `
    <section class="resume-section interests-section mb-5">
    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
    <div class="resume-section-content">
        <ul class="list-unstyled">
            <li v-for="interest in resume.interests" class="mb-1">{{interest}}</li>
        </ul>
    </div>
</section>
`
});






