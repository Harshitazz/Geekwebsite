import MemberCard from "../component/MemberCard";
import BGSphere from "../component/BGSphere";
import './MembersPage.css'
import teamData from '../config/teamData.json'

function MembersPage(){
   return (
      <section className="membersPage">
         
         <BGSphere width={'500px'} height={'480px'} x={'15%'} y={'50%'} color={'#5d2f1e'}/>
         <BGSphere width={'500px'} height={'480px'} x={'80%'} y={'50%'} color={'#14494c'}/>

         <header className="text-center">
            <h1>MEMBERS</h1>
            <p>Meet the team who put it all together</p>
         </header>
         <div className="co-founders-wrap">
            <h2>Co-Founders</h2>
            <div className="co-founders">
               <MemberCard name={'Manas Chopra'} title={'AI Head'} imageUrl={'https://randomuser.me/api/portraits/men/1.jpg'} linkedInUrl={'www.linkedin.com'} />
               <MemberCard name={'Manas Chopra'} title={'AI Head'} imageUrl={'https://randomuser.me/api/portraits/men/4.jpg'} linkedInUrl={'www.linkedin.com'} isRedTheme={0}/>
               <MemberCard name={'Manas Chopra'} title={'AI Head'} imageUrl={'https://randomuser.me/api/portraits/men/6.jpg'} linkedInUrl={'www.linkedin.com'} />
            </div>
         </div>


         <div className="department-wrap">
            <h2>Heads Of Departments</h2>
            <div className="departments">
               {Object.keys(teamData).map(dep => (
                  <Department name={dep} />
               ))}
            </div>
         </div>
         
      </section>
   )
}

// Department Heads
const Department =({name})=>(
   <div className="department">
      <h2> {name} </h2>
      <div className="members">
         {teamData[name].map((member, index) => {
            return <MemberCard key={index} name={member.name} title={member.title} imageUrl={member.imageUrl} linkedInUrl={member.linkedInUrl} />
         })}
      </div>
   </div>
)
 

export default MembersPage;