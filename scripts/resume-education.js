
Vue.component('resume-education', {
    props: ['resume'],
    template:
    `
    <section class="resume-section education-section mb-5">
    <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
    <div class="resume-section-content">
        <ul class="list-unstyled">
            <li class="mb-2" v-for="education in resume.education">
                <div class="resume-degree font-weight-bold">{{education.course}}</div>
                <div class="resume-degree-org">{{education.institution}}</div>
                <div class="resume-degree-time">{{education.period}}</div>
            </li>
        </ul>
    </div>
   </section>
    `
});






