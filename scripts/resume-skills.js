
Vue.component('resume-skills', {
    props: ['resume'],
    template:
    `
    <section class="resume-section skills-section mb-5">
 <h2 class="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
 <div class="resume-section-content">
     <div v-for="skill in resume.skills" class="resume-skill-item">
         <h4 class="resume-skills-cat font-weight-bold">{{skill.name}}</h4>
         <ul class="list-unstyled mb-4">
             <li class="mb-2" v-for="technology in skill.technologies">
                 <div class="resume-skill-name">{{technology.name}}</div>
                 <div class="progress resume-progress">
                     <div class="progress-bar theme-progress-bar-dark" role="progressbar" v-bind:style="{width: technology.percentage + '%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                 </div>
             </li>

         </ul>
     </div>
 </div>
</section>
    `
});






