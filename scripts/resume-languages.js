
Vue.component('resume-languages', {
    props: ['resume'],
    template:
    `
    <section class="resume-section language-section mb-5">
    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
    <div class="resume-section-content">
        <ul class="list-unstyled resume-lang-list">
            <li v-for="language in resume.language" class="mb-2">
                <span class="resume-lang-name font-weight-bold">{{language.name}}</span>
                <small class="text-muted font-weight-normal">({{language.level}})</small>
            </li>

        </ul>
    </div>
</section>
    `
});






