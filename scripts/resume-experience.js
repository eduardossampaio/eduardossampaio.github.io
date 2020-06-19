

Vue.component('resume-experience', {
    props: ['resume'],
    template:
    `
    <section class="resume-section experience-section mb-5">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
        <div class="resume-section-content">
            <div class="resume-timeline position-relative">
                <article v-for="experience in resume.experience" class="resume-timeline-item position-relative pb-5">

                    <div class="resume-timeline-item-header mb-2">
                        <div class="d-flex flex-column flex-md-row">
                            <h3 class="resume-position-title font-weight-bold mb-1">{{experience.role}}</h3>
                            <div class="resume-company-name ml-auto">{{experience.where}}</div>
                        </div>
                        <div class="resume-position-time">{{experience.period}}</div>
                    </div>
                    <div class="resume-timeline-item-desc">
                        <p>{{experience.description}}</p>
                        <div v-if="experience.achievements">
                            <h4 class="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
                            <p>{{experience.achievements.description}}</p>
                            <ul>
                                <li v-for="detail in experience.achievements.details">{{detail}}</li>
                            </ul>
                        </div>
                        <h4 class="resume-timeline-item-desc-heading font-weight-bold">Technologies used:</h4>
                        <ul class="list-inline">
                            <li v-for="technologies in experience.technologies" class="list-inline-item"><span class="badge badge-primary badge-pill">{{technologies}}</span></li>
                        </ul>
                    </div>

                </article>
            </div>
        </div>
    </section>

    `
});


