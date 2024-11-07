import "./RightComponent.css";

const tasks = [
  [
    "Buy eggs from the local market",
    "Pick up some fresh strawberries",
    "Grab some whole grain bread",
    "Don't forget the bag of potatoes",
    "Look for fresh seasonal fruits",
  ],
  [
    "Finish the quarterly financial report",
    "Respond to pending client emails",
    "Attend team meeting at 10 am",
    "Prepare slides for presentation",
    "Review the marketing proposal draft",
  ],
  [
    "Vacuum the living room carpet thoroughly",
    "Clean the kitchen countertops",
    "Dust all the furniture in the house",
    "Take out the trash before 9 am",
    "Organize the laundry baskets properly",
  ],
  [
    "Go hiking in the nearby mountain trails",
    "Visit a local museum to explore history",
    "Plan a movie night with friends",
    "Relax by the pool and read a book",
    "Order pizza for a late-night treat",
  ],
  [
    "Run 3 miles in the morning on the treadmill",
    "Complete 50 push-ups before breakfast",
    "Stretch and do yoga for 15 minutes",
    "Drink at least 8 cups of water today",
    "Sleep for at least 8 hours tonight",
  ],
  [
    "Buy a thoughtful birthday gift for Lisa",
    "Order a chocolate cake from the bakery",
    "Decorate the house with balloons and streamers",
    "Send out the birthday invitations today",
    "Plan a few fun party games for everyone",
  ],
  [
    "Take the dog for a long walk in the park",
    "Feed the cat and refill the water bowl",
    "Clean the fish tank and change the water",
    "Trim the dogs nails for safety",
    "Buy new pet food supplies at the store",
  ],
  [
    "Review chapters 2 and 3 for the exam",
    "Write a summary for each lesson",
    "Practice math problems from page 72",
    "Watch an educational video on biology",
    "Take a quiz to test your knowledge",
  ],
  [
    "Post a new photo on Instagram today",
    "Reply to all the comments on Twitter",
    "Update the LinkedIn profile with new skills",
    "Like and share an inspiring post",
    "Watch the latest trending TikTok videos",
  ],
  [
    "Fix the leaky faucet in the kitchen",
    "Patch the hole in the living room wall",
    "Replace the broken lightbulb in the hallway",
    "Check the heating system for issues",
    "Organize the cluttered storage closet",
  ],
  [
    "Write at least 500 words for the next chapter",
    "Revise the character sketch for the lead role",
    "Research medieval weapons for the next scene",
    "Brainstorm plot twists for the upcoming chapters",
    "Proofread the manuscript for any typos",
  ],
  [
    "Chop the vegetables for the week's meals",
    "Marinate chicken breasts with lemon and herbs",
    "Make a batch of quinoa for lunches",
    "Prepare smoothie ingredients for tomorrow",
    "Pack a healthy lunch for work tomorrow",
  ],
  [
    "Scrub the bathroom tiles and clean the shower",
    "Wipe down all kitchen counters and appliances",
    "Vacuum the entire house, especially the carpets",
    "Organize the closet and donate unused clothes",
    "Wipe down windows and clean the blinds",
  ],
  [
    "Meditate for 15 minutes to relax your mind",
    "Apply a refreshing face mask for your skin",
    "Read a chapter of your current book",
    "Take a hot bubble bath with lavender scents",
    "Do a relaxing breathing exercise for stress relief",
  ],
  [
    "Update your resume with new work experience",
    "Write a personalized cover letter for the job",
    "Submit your application to three companies",
    "Prepare answers for possible interview questions",
    "Research the companies you’re applying to",
  ],
];

export default function RightComponent() {
  function random_tasks() {
    const random = Math.floor(Math.random() * tasks.length);
    const task_list = tasks[random];

    console.log(task_list);

    return task_list.map((item, index) => {
      return (
        <div key={index} className="task-item">
          {item}
        </div>
      );
    });
  }

  return (
    <div className="right-container">
      <h2>To Do</h2>
      <div>{random_tasks()}</div>
    </div>
  );
}
