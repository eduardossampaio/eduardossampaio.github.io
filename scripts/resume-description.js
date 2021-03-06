Vue.component('resume-description', {
    props: ['resume'],
    template:
    `
    <section class="resume-section summary-section mb-5">
        <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
        <div class="resume-section-content">
            <p class="mb-0">{{resume.description}}</p>
        </div>
    </section>
    `
})