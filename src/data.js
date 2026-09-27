export const roles = [
  { id: 'admin', label: 'Foundation Admin', name: 'Immaculata Emmanuel', initials: 'IE' },
  { id: 'guardian', label: 'Guardian', name: 'Grace Okafor', initials: 'GO' },
  { id: 'mentor', label: 'Mentor', name: 'Amara Okoye', initials: 'AO' },
  { id: 'volunteer', label: 'Volunteer', name: 'Daniel Eze', initials: 'DE' },
  { id: 'donor', label: 'Donor', name: 'Emeka Foundation', initials: 'EF' },
]

export const navigation = {
  admin: ['Overview', 'Children', 'Applications', 'Mentor matching', 'Sessions & reports', 'Events', 'Donations', 'Impact', 'My account', 'Help & support'],
  guardian: ['Overview', 'My child', 'Support application', 'Events', 'Messages', 'My account', 'Help & support'],
  mentor: ['Overview', 'My caseload', 'My sessions', 'Progress reports', 'Messages', 'My account', 'Help & support'],
  volunteer: ['Overview', 'Events', 'My hours', 'Application status', 'My account', 'Help & support'],
  donor: ['Overview', 'Give & sponsor', 'My giving', 'Impact', 'My account', 'Help & support'],
}

export const initialChildren = [
  { id: 'RC-082', age: 12, support: 'Learning support', mentor: 'Amara O.', status: 'Active', progress: 68, guardian: 'Approved guardian', updates: ['Reading confidence improved this term.', 'Set a learning goal for the next session.'] },
  { id: 'RC-076', age: 15, support: 'Career guidance', mentor: 'David E.', status: 'Active', progress: 54, guardian: 'Approved guardian', updates: ['Completed a career-interest check-in.', 'Exploring technical college options.'] },
  { id: 'RC-061', age: 10, support: 'Reading & literacy', mentor: 'Unassigned', status: 'Waiting for match', progress: 35, guardian: 'Approved guardian', updates: ['Joined the weekly reading circle.'] },
  { id: 'RC-049', age: 13, support: 'Life skills', mentor: 'Ngozi A.', status: 'Active', progress: 76, guardian: 'Approved guardian', updates: ['Completed a personal goal plan.', 'Mentor session completed this week.'] },
  { id: 'RC-055', age: 11, support: 'Digital skills', mentor: 'Amara O.', status: 'Active', progress: 42, guardian: 'Approved guardian', updates: ['Started a beginner coding project.', 'Set a learning goal for the next session.'] },
]

export const initialApplications = [
  { id: 'APP-204', type: 'Guardian', title: 'Household support request', detail: 'Learning materials and mentoring', submitted: 'Sep 22, 2026', status: 'Pending review' },
  { id: 'APP-203', type: 'Mentor', title: 'Mentor application', detail: 'Digital skills · 4 years experience', submitted: 'Sep 21, 2026', status: 'Pending review' },
  { id: 'APP-202', type: 'Volunteer', title: 'Volunteer application', detail: 'Community reading circle', submitted: 'Sep 20, 2026', status: 'Pending review' },
]

export const initialMatches = [
  { id: 'RC-082', age: 12, need: 'Learning support', mentor: 'Amara Okoye', initials: 'AO', score: 96, skills: ['Reading', 'Weekly availability'] },
  { id: 'RC-076', age: 15, need: 'Career guidance', mentor: 'David Eze', initials: 'DE', score: 91, skills: ['Career coaching', 'STEM'] },
  { id: 'RC-061', age: 10, need: 'Reading & literacy', mentor: 'Ngozi Abara', initials: 'NA', score: 88, skills: ['Literacy', 'Child safeguarding'] },
]

export const initialSessions = [
  { id: 'SES-118', child: 'RC-082', mentor: 'Amara Okoye', date: 'Today · 3:30 PM', focus: 'Reading practice', status: 'Upcoming' },
  { id: 'SES-116', child: 'RC-055', mentor: 'Amara Okoye', date: 'Friday · 2:00 PM', focus: 'Digital skills', status: 'Upcoming' },
  { id: 'SES-115', child: 'RC-076', mentor: 'David Eze', date: 'Yesterday · 11:00 AM', focus: 'Career check-in', status: 'Completed' },
]

export const initialEvents = [
  { id: 'EV-041', title: 'Community learning day', date: 'Oct 04, 2026', category: 'Education', place: 'Lagos partner centre', spots: '8 spots open', registered: false },
  { id: 'EV-039', title: 'Reading circle support', date: 'Oct 08, 2026', category: 'Volunteer', place: 'Ikeja community hall', spots: '12 spots open', registered: true },
  { id: 'EV-036', title: 'Family wellbeing workshop', date: 'Oct 12, 2026', category: 'Wellbeing', place: 'Online session', spots: '20 spots open', registered: false },
]

export const initialDonations = [
  { id: 'RCPT-1061', donor: 'Emeka Foundation', date: 'Sep 18, 2026', amount: 75000, currency: 'NGN', allocation: 'Education fund', frequency: 'Monthly', status: 'Confirmed' },
  { id: 'RCPT-1058', donor: 'A supporter', date: 'Sep 16, 2026', amount: 400, currency: 'USD', allocation: 'Where needed most', frequency: 'One-time', status: 'Confirmed' },
  { id: 'RCPT-1049', donor: 'A supporter', date: 'Sep 12, 2026', amount: 125000, currency: 'NGN', allocation: 'Healthcare', frequency: 'One-time', status: 'Confirmed' },
]

export const initialMyDonations = [
  { id: 'RCPT-1061', donor: 'You', date: 'Sep 18, 2026', amount: 75000, currency: 'NGN', allocation: 'Education fund', frequency: 'Monthly', status: 'Confirmed' },
  { id: 'RCPT-1034', donor: 'You', date: 'Aug 18, 2026', amount: 50000, currency: 'NGN', allocation: 'Education fund', frequency: 'Monthly', status: 'Confirmed' },
  { id: 'RCPT-1008', donor: 'You', date: 'Jul 12, 2026', amount: 50000, currency: 'NGN', allocation: 'Where needed most', frequency: 'One-time', status: 'Confirmed' },
]

export const faqs = [
  { q: 'Who can see a child’s information?', a: 'Only Foundation Admins and the assigned care team see child case details. Guardians see their household information. Donors and volunteers see anonymized programme updates only.' },
  { q: 'Are payments processed in this demo?', a: 'No. The payment choices are part of a simulated walkthrough. Paystack and Stripe are not connected.' },
  { q: 'How does mentor matching work?', a: 'The system can recommend potential mentors based on support needs and skills. A Foundation Admin reviews and approves each match.' },
  { q: 'How do I contact the Foundation?', a: 'Use Help & support to send a demo support request. A Foundation Admin would follow up in the full service.' },
]
