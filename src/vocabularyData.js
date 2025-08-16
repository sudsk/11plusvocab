const allWords = [
  {
    word: 'khaki',
    definition: 'A light yellowish-brown color; or a strong cotton fabric of this color often used for military uniforms',
    example: 'He wore khaki shorts and a white t-shirt for the safari.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'solicitor',
    definition: 'A type of lawyer who gives legal advice and prepares legal documents',
    example: 'They consulted a solicitor about buying the property.',
    partOfSpeech: 'noun'
  },
  {
    word: 'jaded',
    definition: 'Tired, bored, or lacking enthusiasm, typically after having too much of something',
    example: 'The jaded food critic had eaten at so many restaurants that nothing impressed him anymore.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flounder',
    definition: 'To struggle mentally; to have difficulty doing something; or a type of flat fish',
    example: 'He floundered when trying to answer the difficult question.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'implicit',
    definition: 'Suggested or understood without being directly stated',
    example: 'There was an implicit agreement between them to never discuss the incident.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'poignant',
    definition: 'Evoking a keen sense of sadness or regret; touching or moving',
    example: 'The film tells a poignant story about a family separated by war.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'irrational',
    definition: 'Not logical or reasonable; not based on reason',
    example: 'Her fear of harmless garden spiders was irrational but real.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'bashful',
    definition: 'Shy and easily embarrassed',
    example: 'The bashful child hid behind his mother when introduced to strangers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'muscular',
    definition: 'Having well-developed muscles; strong and powerful',
    example: 'The athlete had a muscular build from years of training.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flawless',
    definition: 'Perfect, without any defects or weaknesses',
    example: 'The diamond was completely flawless and worth a fortune.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'novel',
    definition: 'New and not previously known; or a fictional book of substantial length',
    example: 'Scientists discovered a novel way to produce clean energy.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'pompous',
    definition: 'Self-important or arrogant; showing an exaggerated sense of self-importance',
    example: 'The pompous official insisted on being addressed by his full title.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'combat',
    definition: 'Fighting or a battle, especially during war',
    example: 'The soldiers trained for combat in harsh conditions.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'turnabout',
    definition: 'A complete change of direction or opinion',
    example: 'Her turnabout on the issue surprised everyone who knew her.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grievance',
    definition: 'A real or imagined cause for complaint, especially unfair treatment',
    example: 'The employee filed a grievance about workplace discrimination.',
    partOfSpeech: 'noun'
  },
  {
    word: 'thaw',
    definition: 'To become warm enough for ice or snow to melt; or to become more friendly',
    example: 'Relations between the two countries began to thaw after years of tension.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'rejoice',
    definition: 'To feel or show great joy or delight',
    example: 'The whole town rejoiced when the local team won the championship.',
    partOfSpeech: 'verb'
  },
  {
    word: 'flustered',
    definition: 'Agitated, confused, or bothered',
    example: 'She became flustered when asked to speak in front of the large audience.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obsequiousness',
    definition: 'Obedient or attentive to an excessive or servile degree',
    example: 'His obsequiousness toward the boss made his colleagues uncomfortable.',
    partOfSpeech: 'noun'
  },
  {
    word: 'passive',
    definition: 'Accepting or allowing what happens without active response or resistance',
    example: 'He took a passive role in the discussion, listening but rarely speaking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'refined',
    definition: 'Elegant and cultured in appearance, manner, or taste; or purified',
    example: 'She had a refined appreciation for classical music.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'watertight',
    definition: 'So tightly made or fitted that water cannot enter or escape',
    example: 'The submarine had to be completely watertight to operate safely.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'squander',
    definition: 'To waste something, especially money or opportunities, in a reckless way',
    example: 'He squandered his inheritance on expensive cars and parties.',
    partOfSpeech: 'verb'
  },
  {
    word: 'innovation',
    definition: 'A new method, idea, or product',
    example: 'The company is known for innovation in smartphone technology.',
    partOfSpeech: 'noun'
  },
  {
    word: 'barge',
    definition: 'A flat-bottomed boat for carrying freight; or to move forcefully or rudely',
    example: 'He barged into the room without knocking.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'meteorological spring',
    definition: 'The season defined by weather professionals based on temperature patterns, typically March to May in the Northern Hemisphere',
    example: 'Meteorological spring begins on March 1, while astronomical spring starts on the equinox.',
    partOfSpeech: 'noun'
  },
  {
    word: 'understate',
    definition: 'To describe something as less important or serious than it really is',
    example: 'To say he was "a bit upset" was to understate how angry he actually felt.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inhibit',
    definition: 'To restrain, block, or suppress an action or process',
    example: 'The medication works by inhibiting the growth of bacteria.',
    partOfSpeech: 'verb'
  },
  {
    word: 'novice',
    definition: 'A person who is new to and inexperienced in a job, situation, or activity',
    example: 'As a novice skier, she stayed on the beginner slopes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'neophyte',
    definition: 'A beginner or a person who is new to a subject or activity',
    example: 'He was a neophyte in politics when he first ran for office.',
    partOfSpeech: 'noun'
  },
  {
    word: 'Abyssinian',
    definition: 'Relating to Abyssinia (now Ethiopia); or a breed of slender, short-haired cat',
    example: 'The Abyssinian cat is known for its ticked coat pattern and playful personality.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'territorial',
    definition: 'Relating to the ownership of an area of land; or aggressively defending what one perceives as one\'s territory',
    example: 'The dog was very territorial and barked at anyone who came near the yard.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'idiosyncrasy',
    definition: 'A peculiar or individual characteristic, habit, or mannerism',
    example: 'One of his idiosyncrasies was always arranging his books by color rather than by author.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pretentious',
    definition: 'Attempting to impress by affecting greater importance or merit than is actually possessed',
    example: 'His pretentious remarks about fine wine showed he knew little about the subject.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'consonance',
    definition: 'Agreement or harmony between opinions or actions; or repetition of consonant sounds in writing',
    example: 'The repeated "s" sounds create consonance in the phrase "sweet silent sleep."',
    partOfSpeech: 'noun'
  },
  {
    word: 'idiom',
    definition: 'A group of words with a meaning that is different from the meanings of the individual words',
    example: '"Under the weather" is an idiom that means feeling ill.',
    partOfSpeech: 'noun'
  },
  {
    word: 'confine',
    definition: 'To keep or restrict someone or something within certain limits of space, scope, or time',
    example: 'The prisoner was confined to a small cell.',
    partOfSpeech: 'verb'
  },
  {
    word: 'feasible',
    definition: 'Possible to do easily or conveniently; likely to work or be achieved',
    example: 'The engineer determined that the bridge design was feasible with the available materials.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'attainable',
    definition: 'Able to be achieved, accomplished, or acquired',
    example: 'With hard work, her goals were entirely attainable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'cheddar',
    definition: 'A hard, yellow cheese originally made in the village of Cheddar in England',
    example: 'He sprinkled grated cheddar over the top of the casserole.',
    partOfSpeech: 'noun'
  },
  {
    word: 'faze',
    definition: 'To disturb, disconcert, or daunt; to cause to be confused or perplexed',
    example: 'The tough questions from the audience didn\'t faze the experienced speaker.',
    partOfSpeech: 'verb'
  },
  {
    word: 'negate',
    definition: 'To deny the existence or truth of; to make ineffective or invalid',
    example: 'His later actions negated his earlier apology.',
    partOfSpeech: 'verb'
  },
  {
    word: 'conducive',
    definition: 'Making a certain situation or outcome likely or possible',
    example: 'A quiet environment is conducive to studying effectively.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'psoriasis',
    definition: 'A skin disease that causes red, itchy, scaly patches',
    example: 'She used a special cream to treat the psoriasis on her elbows.',
    partOfSpeech: 'noun'
  },
  {
    word: 'volatile',
    definition: 'Likely to change suddenly and unexpectedly, especially for the worse; or easily evaporating',
    example: 'The political situation remained volatile throughout the election.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'windfall',
    definition: 'An unexpected piece of good fortune, especially a large amount of money',
    example: 'The tax refund was a welcome windfall that helped pay off their debts.',
    partOfSpeech: 'noun'
  },
  {
    word: 'scissors',
    definition: 'A cutting instrument having two blades whose cutting edges slide past each other',
    example: 'She used scissors to cut the paper into shapes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grimaced',
    definition: 'Made an ugly, twisted expression on one\'s face expressing disgust, pain, or displeasure',
    example: 'He grimaced when he tasted the sour lemon.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'wince',
    definition: 'To make a slight involuntary grimace or shrinking movement due to pain or distress',
    example: 'She couldn\'t help but wince when the doctor gave her the injection.',
    partOfSpeech: 'verb'
  },
  {
    word: 'deviant',
    definition: 'Departing from usual or accepted standards, especially in social or sexual behavior',
    example: 'His deviant behavior made him an outcast in the community.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'reprobate',
    definition: 'An unprincipled person; someone rejected by God',
    example: 'The old reprobate was known throughout town for his bad behavior.',
    partOfSpeech: 'noun'
  },
  {
    word: 'trailblazer',
    definition: 'A person who makes a new track through wild country; a pioneer or innovator',
    example: 'She was a trailblazer for women\'s rights in the 1960s.',
    partOfSpeech: 'noun'
  },
  {
    word: 'domestic',
    definition: 'Relating to the running of a home or to family relations; or existing or occurring inside a particular country',
    example: 'He took care of all the domestic chores while his wife was away.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'beast of burden',
    definition: 'An animal used to carry heavy loads or perform other heavy work',
    example: 'The donkey has been used as a beast of burden for thousands of years.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'in the doghouse',
    definition: 'In trouble or disfavor with someone, especially after doing something wrong',
    example: 'He was in the doghouse with his wife after forgetting their anniversary.',
    partOfSpeech: 'idiom'
  },
  {
    word: 'against the clock',
    definition: 'With a limited amount of time available; in a race with time',
    example: 'The team worked against the clock to finish the project before the deadline.',
    partOfSpeech: 'idiom'
  },
  {
    word: 'quaff',
    definition: 'To drink (something, especially an alcoholic drink) heartily',
    example: 'The thirsty hikers quaffed their water after reaching the summit.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hearty',
    definition: 'Showing warm and heartfelt friendliness; or substantial, abundant, and filling (of food)',
    example: 'After the hike, they enjoyed a hearty meal of stew and bread.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'writhe',
    definition: 'To twist or contort the body, usually in pain',
    example: 'He writhed in agony after spraining his ankle.',
    partOfSpeech: 'verb'
  },
  {
    word: 'wield',
    definition: 'To hold and use (a weapon or tool); or to have and use (power or influence)',
    example: 'The knight wielded his sword against the dragon.',
    partOfSpeech: 'verb'
  },
  {
    word: 'heave',
    definition: 'To lift or haul something heavy with great effort; or to rise and fall rhythmically',
    example: 'It took three people to heave the piano up the stairs.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mope',
    definition: 'To be dejected and apathetic; to sulk',
    example: 'After losing the game, he spent the evening moping in his room.',
    partOfSpeech: 'verb'
  },
  {
    word: 'wade',
    definition: 'To walk through water, mud, or another substance that impedes movement',
    example: 'They had to wade across the shallow stream to reach the other side.',
    partOfSpeech: 'verb'
  },
  {
    word: 'confiscate',
    definition: 'To take or seize someone\'s property with authority',
    example: 'The teacher confiscated the cell phones during the exam.',
    partOfSpeech: 'verb'
  },
  {
    word: 'preen',
    definition: 'To clean or arrange one\'s feathers with the beak (of a bird); or to devote effort to making oneself look attractive',
    example: 'The peacock preened its feathers in a magnificent display.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hoist',
    definition: 'To raise or lift, especially by means of ropes or pulleys',
    example: 'The sailors hoisted the flag up the mast.',
    partOfSpeech: 'verb'
  },
  {
    word: 'calligraphy',
    definition: 'The art of beautiful handwriting',
    example: 'She studied calligraphy and created elegant wedding invitations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'concertina',
    definition: 'A small musical instrument similar to an accordion; or to fold or collapse in a manner resembling a concertina',
    example: 'The pages of the book concertina out to reveal a 3D scene.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'pendant',
    definition: 'A piece of jewelry that hangs from a chain worn around the neck',
    example: 'She wore a gold heart pendant that belonged to her grandmother.',
    partOfSpeech: 'noun'
  },
  {
    word: 'archery',
    definition: 'The sport or practice of shooting with a bow and arrows',
    example: 'She took up archery and soon became skilled at hitting the target.',
    partOfSpeech: 'noun'
  },
  {
    word: 'snake charmer',
    definition: 'A person who appears to hypnotize or control a snake, usually by playing music',
    example: 'The tourists watched in amazement as the snake charmer played his flute.',
    partOfSpeech: 'noun'
  },      
  {
    word: 'errand',
    definition: 'A short trip to do a specific task, usually for someone else',
    example: 'Mom asked me to run an errand to the grocery store.',
    partOfSpeech: 'noun'
  },
  {
    word: 'profane',
    definition: 'Showing disrespect for sacred things; using rude or offensive language',
    example: 'The teacher asked the student not to use profane language in class.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perusal',
    definition: 'The action of reading or examining something carefully',
    example: 'After careful perusal of the menu, she ordered pasta.',
    partOfSpeech: 'noun'
  },
  {
    word: 'furtive',
    definition: 'Done secretly or quietly, trying not to be noticed',
    example: 'He cast a furtive glance around before sharing the secret.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'elementary',
    definition: 'Basic or simple; relating to the early stages of learning',
    example: 'These are elementary math problems that most children can solve.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'apprehend',
    definition: 'To arrest someone; or to understand or grasp an idea',
    example: 'The police were able to apprehend the thief quickly.',
    partOfSpeech: 'verb'
  },
  {
    word: 'pinnacle',
    definition: 'The highest point or level of something',
    example: 'Winning the gold medal was the pinnacle of her career.',
    partOfSpeech: 'noun'
  },
  {
    word: 'colt',
    definition: 'A young male horse',
    example: 'The colt ran playfully around the meadow.',
    partOfSpeech: 'noun'
  },
  {
    word: 'toll',
    definition: 'A payment for using a road or bridge; or the cost or damage caused by something',
    example: 'We had to pay a toll to cross the bridge.',
    partOfSpeech: 'noun'
  },
  {
    word: 'despot',
    definition: 'A ruler who has total power and uses it in a cruel way',
    example: 'The despot ruled the country with fear and threats.',
    partOfSpeech: 'noun'
  },
  {
    word: 'epitomise',
    definition: 'To be a perfect example of something',
    example: 'Her kindness epitomises what friendship should be.',
    partOfSpeech: 'verb'
  },
  {
    word: 'burden',
    definition: 'A heavy load that is difficult to carry; or a responsibility that causes worry',
    example: 'Carrying all the groceries was a burden for the small child.',
    partOfSpeech: 'noun'
  },
  {
    word: 'trammel',
    definition: 'A fishing net; or something that restricts freedom',
    example: 'The fisherman cast his trammel into the deep waters.',
    partOfSpeech: 'noun'
  },
  {
    word: 'delude',
    definition: 'To make someone believe something that is not true',
    example: 'Don\'t delude yourself into thinking this will be easy.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mirth',
    definition: 'Happiness and laughter',
    example: 'The party was filled with mirth and good cheer.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bestow',
    definition: 'To give something as an honor or present',
    example: 'The queen will bestow medals on the brave soldiers.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prismatic',
    definition: 'Relating to or like a prism, especially in breaking light into colors',
    example: 'The crystal created prismatic patterns on the wall.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'iris',
    definition: 'The colored part of the eye; or a type of flower',
    example: 'She has beautiful blue irises in her eyes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'veteran',
    definition: 'Someone with lots of experience, especially a former soldier',
    example: 'As a veteran teacher, she knew how to handle difficult students.',
    partOfSpeech: 'noun'
  },
  {
    word: 'maverick',
    definition: 'An independent person who thinks and acts differently from others',
    example: 'Steve Jobs was known as a maverick in the tech industry.',
    partOfSpeech: 'noun'
  },
  {
    word: 'lurid',
    definition: 'Shocking or vivid in a distasteful way',
    example: 'The newspaper gave lurid details of the crime.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inept',
    definition: 'Having no skill; clumsy',
    example: 'His inept handling of the situation made things worse.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'renegade',
    definition: 'Someone who leaves one group or cause to join another that is opposed to it',
    example: 'He was seen as a renegade when he changed political parties.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pragmatic',
    definition: 'Dealing with things in a practical way',
    example: 'We need a pragmatic solution to this problem.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'whimsical',
    definition: 'Playfully quaint or fanciful, especially in an appealing way',
    example: 'The garden was decorated with whimsical statues of fairies.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intractable',
    definition: 'Hard to control or deal with',
    example: 'The disease proved intractable despite various treatments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'mettle',
    definition: 'A person\'s ability to cope well with difficulties; courage and resilience',
    example: 'The challenge tested her mettle as a leader.',
    partOfSpeech: 'noun'
  },
  {
    word: 'phenomenon',
    definition: 'A fact or situation that can be observed to exist or happen',
    example: 'Scientists studied the phenomenon of lightning.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inflammatory',
    definition: 'Causing or able to cause anger or strong feelings',
    example: 'His inflammatory remarks sparked a heated debate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'deformity',
    definition: 'A physical abnormality, especially one present from birth',
    example: 'The accident left him with a slight deformity in his hand.',
    partOfSpeech: 'noun'
  },
  {
    word: 'giddily',
    definition: 'In a way that shows excitement and happiness',
    example: 'She laughed giddily when she heard the good news.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'ostentatious',
    definition: 'Displayed or done in a showy way to impress others',
    example: 'The mansion was filled with ostentatious decorations.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'accent',
    definition: 'A distinctive way of pronouncing words; or emphasis given to something',
    example: 'She speaks English with a French accent.',
    partOfSpeech: 'noun'
  },
  {
    word: 'snoop',
    definition: 'To investigate or look around secretly',
    example: 'She doesn\'t like people who snoop through her belongings.',
    partOfSpeech: 'verb'
  },
  {
    word: 'appease',
    definition: 'To calm or satisfy someone by giving them what they want',
    example: 'They tried to appease the angry customer with a free meal.',
    partOfSpeech: 'verb'
  },
  {
    word: 'down-to-earth',
    definition: 'Practical and realistic; without pretension',
    example: 'Despite being famous, she remains down-to-earth and friendly.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lethargic',
    definition: 'Lacking energy; sluggish and apathetic',
    example: 'The hot weather made everyone feel lethargic.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'quaint',
    definition: 'Attractively unusual or old-fashioned',
    example: 'They stayed in a quaint little cottage in the countryside.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'accrue',
    definition: 'To accumulate or build up over time',
    example: 'Interest will accrue on your savings account.',
    partOfSpeech: 'verb'
  },
  {
    word: 'divulge',
    definition: 'To make known private information',
    example: 'She refused to divulge the secret recipe.',
    partOfSpeech: 'verb'
  },
  {
    word: 'irk',
    definition: 'To annoy or irritate',
    example: 'It irks me when people are late without calling.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inkling',
    definition: 'A slight hint or suggestion',
    example: 'She had no inkling of what was about to happen.',
    partOfSpeech: 'noun'
  },
  {
    word: 'obliged',
    definition: 'Feeling or being indebted to someone for a favor',
    example: 'I\'m obliged to you for your help.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'enquiry',
    definition: 'A request for information',
    example: 'The school received several enquiries about enrollment.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inquiry',
    definition: 'A formal investigation',
    example: 'The police launched an inquiry into the incident.',
    partOfSpeech: 'noun'
  },
  {
    word: 'request',
    definition: 'The act of politely asking for something',
    example: 'She made a request for more time to complete the project.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gluttonous',
    definition: 'Excessively greedy, especially about food',
    example: 'The gluttonous king held feasts that lasted for days.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'impoverished',
    definition: 'Very poor and lacking basic necessities',
    example: 'The charity helps impoverished families in the region.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'affluent',
    definition: 'Having a lot of money and owning many things',
    example: 'They lived in an affluent neighborhood with large houses.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'feud',
    definition: 'A long and bitter quarrel between families or groups',
    example: 'The two families have been in a feud for generations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ruse',
    definition: 'A trick or plan used to deceive someone',
    example: 'The gift was just a ruse to get her to come to the surprise party.',
    partOfSpeech: 'noun'
  },
  {
    word: 'rouse',
    definition: 'To wake someone or make someone active or excited',
    example: 'It was difficult to rouse the children on the first day of school.',
    partOfSpeech: 'verb'
  },
  {
    word: 'niche',
    definition: 'A specialized segment of the market; or a comfortable position in life',
    example: 'The store found its niche selling handmade crafts.',
    partOfSpeech: 'noun'
  },
  {
    word: 'easel',
    definition: 'A wooden frame for holding a canvas while painting',
    example: 'The artist set up her easel in the park.',
    partOfSpeech: 'noun'
  },
  {
    word: 'confers',
    definition: 'To discuss something important; or to grant or bestow something',
    example: 'The president confers regularly with his advisors.',
    partOfSpeech: 'verb'
  },
  {
    word: 'flagship',
    definition: 'The best or most important product or service of an organization',
    example: 'This store is the flagship of the entire retail chain.',
    partOfSpeech: 'noun'
  },
  {
    word: 'profound',
    definition: 'Very great or intense; having deep insight or understanding',
    example: 'The book had a profound effect on her thinking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'disreputable',
    definition: 'Not considered to be respectable in character or appearance',
    example: 'They warned her to stay away from the disreputable part of town.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'convoluted',
    definition: 'Extremely complex and difficult to follow',
    example: 'He gave a convoluted explanation that confused everyone.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'saturated',
    definition: 'Completely full or soaked with something',
    example: 'Her clothes were saturated with rain water.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'gully',
    definition: 'A deep narrow channel cut in the earth by running water',
    example: 'The rain created a gully along the side of the road.',
    partOfSpeech: 'noun'
  },
  {
    word: 'penalise',
    definition: 'To punish or put at a disadvantage',
    example: 'The team was penalised for breaking the rules.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fluctuate',
    definition: 'To rise and fall irregularly in number or amount',
    example: 'Stock prices tend to fluctuate throughout the day.',
    partOfSpeech: 'verb'
  },
  {
    word: 'garret',
    definition: 'A small, simple room at the top of a house, often under the roof',
    example: 'The starving artist lived in a garret in Paris.',
    partOfSpeech: 'noun'
  },
  {
    word: 'warren',
    definition: 'A network of rabbit burrows; or a crowded area with many connecting passages',
    example: 'The old part of the city was a warren of narrow streets.',
    partOfSpeech: 'noun'
  },
  {
    word: 'scandal',
    definition: 'An action or event that causes public outrage or shock',
    example: 'The politician\'s behavior caused a major scandal.',
    partOfSpeech: 'noun'
  },
  {
    word: 'diurnal',
    definition: 'Active during the day (opposite of nocturnal)',
    example: 'Most birds are diurnal creatures.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sprawled',
    definition: 'Sitting or lying with arms and legs spread out carelessly',
    example: 'The children were sprawled on the floor watching TV.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'audacity',
    definition: 'Boldness or daring, especially with confident disregard for rules or conventions',
    example: 'She had the audacity to question the teacher\'s methods.',
    partOfSpeech: 'noun'
  },
  {
    word: 'annotated',
    definition: 'Having notes added to provide explanation or comment',
    example: 'The professor gave us an annotated version of the poem.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'compiled',
    definition: 'Gathered and put together from different sources',
    example: 'She compiled a list of items needed for the trip.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'evoked',
    definition: 'Brought or recalled a feeling, memory, or image to mind',
    example: 'The song evoked memories of her childhood.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'cumulative',
    definition: 'Increasing or growing by accumulation or successive additions',
    example: 'The cumulative effect of lack of sleep affected his performance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dusky',
    definition: 'Somewhat dark in color; dimly lit, as at twilight',
    example: 'The room was filled with a dusky light as the sun set.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vague',
    definition: 'Not clearly expressed, understood, or thought out',
    example: 'She gave only a vague answer to my question.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'revelled',
    definition: 'Enjoyed oneself in a lively and noisy way',
    example: 'They revelled in their success after winning the championship.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'unfazed',
    definition: 'Not worried or perturbed by something that has happened',
    example: 'She remained unfazed by the sudden change of plans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'endorse',
    definition: 'To publicly or officially support or approve of something',
    example: 'The athlete was paid to endorse the new sports drink.',
    partOfSpeech: 'verb'
  },
  {
    word: 'gable',
    definition: 'The triangular upper part of a wall at the end of a ridged roof',
    example: 'The house had decorative gables on both ends.',
    partOfSpeech: 'noun'
  },
  {
    word: 'steed',
    definition: 'A horse, especially one that is ridden (often used in literature)',
    example: 'The knight mounted his trusty steed.',
    partOfSpeech: 'noun'
  },
  {
    word: 'fruitstar',
    definition: 'A term possibly referring to a star-shaped fruit or a prominent fruit',
    example: 'The fruitstar was the centerpiece of the tropical display.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grapple',
    definition: 'To struggle or wrestle with someone or something',
    example: 'The police had to grapple with the suspect to make the arrest.',
    partOfSpeech: 'verb'
  },
  {
    word: 'thwart',
    definition: 'To prevent someone from accomplishing something',
    example: 'The bad weather thwarted our plans for a picnic.',
    partOfSpeech: 'verb'
  },
  {
    word: 'despise',
    definition: 'To feel strong dislike or hatred for someone or something',
    example: 'She despises people who are cruel to animals.',
    partOfSpeech: 'verb'
  },
  {
    word: 'gawdy',
    definition: 'Excessively showy or bright; (more commonly spelled gaudy)',
    example: 'The room was decorated with gawdy colors and patterns.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'austere',
    definition: 'Severe or strict in manner or appearance; simple and plain',
    example: 'The monastery followed an austere lifestyle.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'stringent',
    definition: 'Strict, precise, and exacting',
    example: 'The company has stringent quality control standards.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'waver',
    definition: 'To shake with a quivering motion; or to be indecisive',
    example: 'Her voice began to waver when she became nervous.',
    partOfSpeech: 'verb'
  },
  {
    word: 'scrutinise',
    definition: 'To examine something in detail and very carefully',
    example: 'The scientist scrutinised the sample under a microscope.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tuxedo',
    definition: 'A formal evening suit for men, typically with a black jacket and trousers, white shirt, and bow tie',
    example: 'He wore a black tuxedo to the wedding.',
    partOfSpeech: 'noun'
  },
  {
    word: 'monk',
    definition: 'A member of a religious community of men living under vows of poverty, chastity, and obedience',
    example: 'The monk spent hours each day in silent meditation.',
    partOfSpeech: 'noun'
  },
  {
    word: 'maggot',
    definition: 'The larva of a fly that feeds on decaying flesh or waste',
    example: 'Maggots had begun to appear in the old food.',
    partOfSpeech: 'noun'
  },
  {
    word: 'obliged',
    definition: 'Feeling or being indebted to someone for a favor or service',
    example: 'I\'m much obliged to you for your help.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'displease',
    definition: 'To cause someone to feel annoyed or unhappy',
    example: 'His rude comments displeased the teacher.',
    partOfSpeech: 'verb'
  },
  {
    word: 'avid',
    definition: 'Having or showing a keen interest in or enthusiasm for something',
    example: 'She is an avid reader and finishes several books each week.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'trinket',
    definition: 'A small ornament or item of jewelry that is of little value',
    example: 'She collected trinkets from every country she visited.',
    partOfSpeech: 'noun'
  },
  {
    word: 'perpetrator',
    definition: 'A person who carries out a harmful or illegal act',
    example: 'The police are still searching for the perpetrator of the crime.',
    partOfSpeech: 'noun'
  },
  {
    word: 'coarse',
    definition: 'Rough or harsh in texture, appearance, or quality',
    example: 'His skin became coarse from years of outdoor work.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sole',
    definition: 'Being the only one; single',
    example: 'She was the sole survivor of the accident.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'altar',
    definition: 'A table or raised structure where religious ceremonies are performed',
    example: 'The bride and groom stood at the altar to exchange their vows.',
    partOfSpeech: 'noun'
  },
  {
    word: 'alter',
    definition: 'To change or make different in some way',
    example: 'They had to alter their plans because of the bad weather.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mourning',
    definition: 'The expression of deep sorrow for someone who has died',
    example: 'The family wore black during the period of mourning.',
    partOfSpeech: 'noun'
  },
  {
    word: 'desert',
    definition: 'A dry, barren area of land with little or no vegetation; or to abandon someone or something',
    example: 'The Sahara is the largest hot desert in the world.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'flop',
    definition: 'To fall or drop heavily and clumsily; or a complete failure',
    example: 'The tired dog flopped down onto its bed.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'winsome',
    definition: 'Attractive or appealing in a fresh, innocent way',
    example: 'The child\'s winsome smile captured everyone\'s heart.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'eschews',
    definition: 'Deliberately avoids or keeps away from something',
    example: 'She eschews social media, preferring face-to-face conversations.',
    partOfSpeech: 'verb (third person)'
  },
  {
    word: 'abstain',
    definition: 'To restrain oneself from doing or enjoying something',
    example: 'He decided to abstain from eating sweets during the month.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fixate',
    definition: 'To become obsessively concerned with or focused on something',
    example: 'Children sometimes fixate on certain toys or characters.',
    partOfSpeech: 'verb'
  },
  {
    word: 'intrepid',
    definition: 'Fearless and adventurous; not afraid of danger or difficulty',
    example: 'The intrepid explorer ventured into unknown territories.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'loathe',
    definition: 'To feel intense dislike or disgust for',
    example: 'He loathes having to wake up early in the morning.',
    partOfSpeech: 'verb'
  },
  {
    word: 'amiable',
    definition: 'Having or displaying a friendly and pleasant manner',
    example: 'Her amiable personality made her popular with everyone.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obsessive',
    definition: 'Thinking about something or someone constantly in a way that is not normal',
    example: 'His obsessive attention to detail made him an excellent editor.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'preoccupied',
    definition: 'So concerned with something that you do not notice other things',
    example: 'She was too preoccupied with her work to notice the time passing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'engrossed',
    definition: 'Having all your attention or interest absorbed by someone or something',
    example: 'The children were completely engrossed in the story.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dauntless',
    definition: 'Showing fearlessness and determination',
    example: 'The dauntless firefighter rushed into the burning building.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'resolutely',
    definition: 'In a way that shows firm determination',
    example: 'She resolutely refused to change her decision.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'sagacity',
    definition: 'The quality of being wise or having good judgment',
    example: 'The elderly woman was known for her sagacity in solving complex problems.',
    partOfSpeech: 'noun'
  },
  {
    word: 'proscribe',
    definition: 'To forbid or condemn, especially by official order',
    example: 'The government proscribed the use of certain chemicals in food products.',
    partOfSpeech: 'verb'
  },
  {
    word: 'burnished',
    definition: 'Polished by rubbing, especially with a cloth; made smooth and shiny',
    example: 'The burnished wood gleamed in the sunlight.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'alacrity',
    definition: 'Brisk and cheerful readiness or eagerness',
    example: 'She accepted the challenge with alacrity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'reluctant',
    definition: 'Unwilling and hesitant; disinclined',
    example: 'He was reluctant to share his personal information with strangers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fractious',
    definition: 'Easily irritated; bad-tempered or irritable',
    example: 'The children became fractious when they were tired.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inquisitive',
    definition: 'Having or showing an interest in learning things; curious',
    example: 'The inquisitive child asked endless questions about how things worked.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'credulity',
    definition: 'A tendency to be too ready to believe that something is real or true',
    example: 'The scammer took advantage of the elderly man\'s credulity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'effulgent',
    definition: 'Shining brightly; radiant',
    example: 'The effulgent rays of the morning sun streamed through the window.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'effrontery',
    definition: 'Insolent or impertinent behavior; shameless boldness',
    example: 'He had the effrontery to suggest that I was lying.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wretched',
    definition: 'Very unhappy, unfortunate, or miserable; or of poor quality or condition',
    example: 'The refugees lived in wretched conditions in the camp.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vague',
    definition: 'Not clearly expressed, understood, or thought out',
    example: 'She gave only a vague description of the man she saw.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ambiguous',
    definition: 'Open to more than one interpretation; not having one obvious meaning',
    example: 'His ambiguous response left us wondering what he really meant.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'rogue',
    definition: 'A dishonest or unprincipled person; or something operating outside normal or desirable controls',
    example: 'The rogue trader lost millions of dollars for the bank.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'vogue',
    definition: 'The prevailing fashion or style at a particular time',
    example: 'Bell-bottom jeans were in vogue during the 1970s.',
    partOfSpeech: 'noun'
  },
  {
    word: 'intricate',
    definition: 'Very complicated or detailed',
    example: 'The watch had an intricate mechanism of tiny gears and springs.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'complexly',
    definition: 'In a way that consists of many different and connected parts',
    example: 'The political situation was complexly intertwined with economic factors.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'interrelating',
    definition: 'Causing two or more things to be connected in a way that they affect each other',
    example: 'The professor explained the interrelating factors that led to the historical event.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'disinclined',
    definition: 'Unwilling or reluctant to do something',
    example: 'After a long day at work, he was disinclined to go out for dinner.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'averse',
    definition: 'Having a strong dislike of or opposition to something',
    example: 'She is not averse to taking risks when necessary.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'repugnance',
    definition: 'Strong dislike, distaste, or hostility',
    example: 'He felt repugnance at the thought of eating raw fish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'antipathy',
    definition: 'A deep-seated feeling of dislike or aversion',
    example: 'There was a mutual antipathy between the two colleagues.',
    partOfSpeech: 'noun'
  },
  {
    word: 'strenuous',
    definition: 'Requiring or using great exertion or effort',
    example: 'The hike up the mountain was strenuous but rewarding.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vigorous',
    definition: 'Strong, healthy, and full of energy',
    example: 'The plants showed vigorous growth after the rain.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'exasperation',
    definition: 'A feeling of intense irritation or annoyance',
    example: 'She sighed in exasperation when the computer crashed again.',
    partOfSpeech: 'noun'
  },
  {
    word: 'distress',
    definition: 'Extreme anxiety, sorrow, or pain',
    example: 'The news of the accident caused great distress to the family.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ecstatic',
    definition: 'Feeling or expressing overwhelming happiness or joyful excitement',
    example: 'The fans were ecstatic when their team won the championship.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'incoherent',
    definition: 'Expressed in an incomprehensible or confusing way; unclear',
    example: 'His explanation was so incoherent that nobody understood it.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'emitted',
    definition: 'Produced and discharged something, especially gas, radiation, or sound',
    example: 'The factory emitted large amounts of smoke into the air.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'tolerance',
    definition: 'The ability or willingness to accept something, especially opinions or behavior, that you may not agree with',
    example: 'The community prides itself on its tolerance of different cultures.',
    partOfSpeech: 'noun'
  },
  {
    word: 'adolescent',
    definition: 'A young person in the process of developing from a child into an adult',
    example: 'Adolescents often experience mood swings due to hormonal changes.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'defendant',
    definition: 'A person accused of a crime in a court of law',
    example: 'The defendant pleaded not guilty to all charges.',
    partOfSpeech: 'noun'
  },
  {
    word: 'benign',
    definition: 'Gentle and kind; not harmful or malicious',
    example: 'The tumor was found to be benign, not cancerous.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ample',
    definition: 'Enough or more than enough; plentiful',
    example: 'There was ample food for everyone at the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'copious',
    definition: 'Abundant in supply or quantity',
    example: 'She took copious notes during the lecture.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'abundant',
    definition: 'Existing or available in large quantities; plentiful',
    example: 'The region is known for its abundant natural resources.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'anguish',
    definition: 'Severe mental or physical pain or suffering',
    example: 'The mother felt anguish when her child went missing.',
    partOfSpeech: 'noun'
  },
  {
    word: 'radiant',
    definition: 'Sending out light; shining or glowing brightly',
    example: 'The bride looked radiant in her wedding dress.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'radiance',
    definition: 'Light or heat as emitted or reflected by something',
    example: 'The radiance of the sunset filled the sky with golden colors.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tendency',
    definition: 'An inclination toward a particular characteristic or type of behavior',
    example: 'He has a tendency to interrupt people when they\'re speaking.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tenacity',
    definition: 'The quality of being very determined; persistence',
    example: 'Her tenacity helped her overcome many obstacles in life.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inclination',
    definition: 'A person\'s natural tendency or urge to act or feel in a particular way',
    example: 'She had no inclination to study medicine despite her parents\' wishes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'exertion',
    definition: 'Physical or mental effort',
    example: 'The climb required considerable physical exertion.',
    partOfSpeech: 'noun'
  },
  {
    word: 'laborious',
    definition: 'Requiring considerable time and effort',
    example: 'Transcribing the old manuscripts was a laborious task.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'contrived',
    definition: 'Deliberately created rather than arising naturally or spontaneously',
    example: 'The plot of the movie seemed contrived and unconvincing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'expend',
    definition: 'To use up a resource such as money, energy or time',
    example: 'Don\'t expend all your energy at the beginning of the race.',
    partOfSpeech: 'verb'
  },
  {
    word: 'foresight',
    definition: 'The ability to predict what will happen or be needed in the future',
    example: 'He had the foresight to invest in technology companies before they became popular.',
    partOfSpeech: 'noun'
  },
  {
    word: 'hindsight',
    definition: 'Understanding of a situation or event only after it has happened',
    example: 'In hindsight, we should have taken a different approach.',
    partOfSpeech: 'noun'
  },
  {
    word: 'provision',
    definition: 'The action of providing or supplying something for use',
    example: 'The provision of clean water is essential for public health.',
    partOfSpeech: 'noun'
  },
  {
    word: 'purveying',
    definition: 'Providing or supplying something, especially food or provisions',
    example: 'The company specializes in purveying fine wines to restaurants.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'amenities',
    definition: 'Desirable or useful features of a place that make it pleasant or comfortable',
    example: 'The hotel offers many amenities, including a swimming pool and fitness center.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'conventional',
    definition: 'Based on or in accordance with what is generally done or believed',
    example: 'She rejected conventional medicine in favor of alternative treatments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prudence',
    definition: 'Care and good sense that someone shows when making decisions',
    example: 'Financial prudence is important when planning for retirement.',
    partOfSpeech: 'noun'
  },
  {
    word: 'prescience',
    definition: 'Knowledge of things before they happen; foresight',
    example: 'His prescience about market trends made him a successful investor.',
    partOfSpeech: 'noun'
  },
  {
    word: 'implant',
    definition: 'To insert or fix something in a specified place',
    example: 'The surgeon will implant an artificial hip joint.',
    partOfSpeech: 'verb'
  },
  {
    word: 'recondite',
    definition: 'Little known or difficult to understand; abstruse',
    example: 'His lectures on philosophy were filled with recondite terminology.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'liberal',
    definition: 'Willing to respect or accept behavior or opinions different from one\'s own; open to new ideas',
    example: 'Her parents had liberal views on education.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'benevolent',
    definition: 'Well-meaning and kindly',
    example: 'The benevolent donor gave money to build a new children\'s hospital.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'condolence',
    definition: 'An expression of sympathy with someone who is suffering sorrow, misfortune, or grief',
    example: 'They sent a card of condolence when his mother died.',
    partOfSpeech: 'noun'
  },
  {
    word: 'indifferent',
    definition: 'Having no particular interest or concern; neither good nor bad',
    example: 'She was indifferent to the criticism and continued with her plans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pledge',
    definition: 'A solemn promise or undertaking; or something given as security for a loan',
    example: 'The politician made a pledge to reduce taxes if elected.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'matted',
    definition: 'Tangled into a thick mass',
    example: 'The dog\'s fur was matted with mud after the walk.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pristine',
    definition: 'In its original condition; unspoiled',
    example: 'The island\'s beaches remained in pristine condition.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'plausible',
    definition: 'Seeming reasonable or probable',
    example: 'His explanation was plausible but later turned out to be false.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'marvel',
    definition: 'To be filled with wonder or astonishment; or something that causes such feelings',
    example: 'Visitors marvel at the beauty of the ancient temple.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'onslaught',
    definition: 'A fierce or destructive attack',
    example: 'The castle walls withstood the onslaught of the enemy army.',
    partOfSpeech: 'noun'
  },
  {
    word: 'meek',
    definition: 'Quiet, gentle, and easily imposed on; submissive',
    example: 'Despite his meek appearance, he had a strong personality.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'docile',
    definition: 'Ready to accept control or instruction; submissive',
    example: 'The horse was docile and easy to train.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'peculiar',
    definition: 'Strange or unusual; different from what is normal or expected',
    example: 'There was a peculiar smell coming from the kitchen.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'oversight',
    definition: 'An unintentional failure to notice or do something; or supervision and watchful care',
    example: 'Not inviting him to the meeting was an oversight, not a deliberate exclusion.',
    partOfSpeech: 'noun'
  },
  {
    word: 'goodwill',
    definition: 'Friendly, helpful, or cooperative feelings or attitude',
    example: 'The company has built up a lot of goodwill among its customers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conspiracy',
    definition: 'A secret plan by a group to do something unlawful or harmful',
    example: 'The police uncovered a conspiracy to assassinate the president.',
    partOfSpeech: 'noun'
  },
  {
    word: 'hostile',
    definition: 'Showing or feeling opposition or dislike; unfriendly',
    example: 'The crowd became hostile when the team began to lose.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hectic',
    definition: 'Full of incessant or frantic activity',
    example: 'It was a hectic day at the office with endless meetings and phone calls.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'serene',
    definition: 'Calm, peaceful, and untroubled; tranquil',
    example: 'The lake looked serene in the early morning light.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'essay',
    definition: 'A short piece of writing on a particular subject',
    example: 'She wrote an essay about climate change for her English class.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dissertation',
    definition: 'A long essay on a particular subject, especially one written for a university degree',
    example: 'His dissertation on medieval poetry earned him a doctoral degree.',
    partOfSpeech: 'noun'
  },
  {
    word: 'moribund',
    definition: 'At the point of death; in terminal decline; lacking vitality or vigor',
    example: 'The moribund company finally closed after years of financial struggles.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'diffident',
    definition: 'Modest or shy because of a lack of self-confidence',
    example: 'The diffident student rarely spoke up in class despite knowing the answers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pernicious',
    definition: 'Having a harmful effect, especially in a gradual or subtle way',
    example: 'The pernicious effects of the pollution were not immediately apparent.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'acrimony',
    definition: 'Bitterness and ill feeling',
    example: 'The divorce was filled with acrimony and disagreements over property.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dispute',
    definition: 'A disagreement, argument, or debate; or to question the truth or validity of something',
    example: 'The neighbors got into a dispute over the property boundary.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'bitterness',
    definition: 'Anger and disappointment at being treated unfairly; or a sharp, unpleasant taste',
    example: 'There was still bitterness between them years after the argument.',
    partOfSpeech: 'noun'
  },
  {
    word: 'main',
    definition: 'Chief in size or importance; principal',
    example: 'The main reason for her success was her determination.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'surly',
    definition: 'Bad-tempered and unfriendly',
    example: 'The surly waiter barely spoke when taking our order.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'courteous',
    definition: 'Polite, respectful, or considerate in manner',
    example: 'The hotel staff was courteous and helpful throughout our stay.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'nurture',
    definition: 'To care for and encourage the growth or development of someone or something',
    example: 'Parents should nurture their children\'s talents and interests.',
    partOfSpeech: 'verb'
  },
  {
    word: 'abrupt',
    definition: 'Sudden and unexpected; or brief to the point of rudeness',
    example: 'The conversation came to an abrupt end when he walked out.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hinder',
    definition: 'To make it difficult for someone to do something or for something to happen',
    example: 'Bad weather hindered the rescue operation.',
    partOfSpeech: 'verb'
  },
  {
    word: 'lucrative',
    definition: 'Producing a large amount of money; profitable',
    example: 'She left her job to pursue a more lucrative career in finance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intact',
    definition: 'Not damaged or impaired in any way; complete',
    example: 'Miraculously, the vase remained intact when it fell.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obscure',
    definition: 'Not well known or famous; or difficult to understand',
    example: 'He collects obscure jazz recordings from the 1920s.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'bliss',
    definition: 'Perfect happiness; great joy',
    example: 'Their honeymoon in Hawaii was pure bliss.',
    partOfSpeech: 'noun'
  },
  {
    word: 'uppity',
    definition: 'Self-important; arrogant',
    example: 'Some people thought she was uppity after she got her promotion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'arrogant',
    definition: 'Having or revealing an exaggerated sense of one\'s own importance or abilities',
    example: 'His arrogant attitude made it difficult for others to work with him.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'condescending',
    definition: 'Acting in a way that shows you believe you are more important or more intelligent than others',
    example: 'She disliked his condescending tone when he explained simple concepts to her.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'patronising',
    definition: 'Treating someone in a way that seems kind but betrays a feeling of superiority',
    example: 'His patronising comments about her cooking made her angry.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'superiority',
    definition: 'The quality or state of being better or greater than others',
    example: 'The team\'s superiority was evident throughout the tournament.',
    partOfSpeech: 'noun'
  },
  {
    word: 'enervating',
    definition: 'Causing one to feel drained of energy or vitality',
    example: 'The combination of heat and humidity made for an enervating afternoon.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ruthless',
    definition: 'Having or showing no pity or compassion for others',
    example: 'The ruthless businessman destroyed his competitors without remorse.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'mercy',
    definition: 'Compassion or forgiveness shown toward someone whom it is within one\'s power to punish or harm',
    example: 'He begged for mercy after being caught stealing.',
    partOfSpeech: 'noun'
  },
  {
    word: 'acerbic',
    definition: 'Sharp and forthright in expression; harsh or severe',
    example: 'The critic was known for his acerbic reviews of new restaurants.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sarcastic',
    definition: 'Marked by or given to using irony in order to mock or convey contempt',
    example: 'His sarcastic comment about her cooking upset her.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fatuous',
    definition: 'Silly and pointless; foolish',
    example: 'He made a fatuous remark that everyone ignored.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prognosticate',
    definition: 'To forecast or predict (something future) from present indications or signs',
    example: 'The financial analyst attempted to prognosticate the market trends for the next year.',
    partOfSpeech: 'verb'
  },
  {
    word: 'rodent',
    definition: 'A gnawing mammal of an order that includes rats, mice, squirrels, hamsters, porcupines, and their relatives',
    example: 'Mice and rats are common rodents found in urban areas.',
    partOfSpeech: 'noun'
  },
  {
    word: 'mediocre',
    definition: 'Of only moderate or low quality; not very good',
    example: 'Despite all the hype, the movie was disappointingly mediocre.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vacant',
    definition: 'Not occupied; empty; or showing no intelligence or interest',
    example: 'We checked into the hotel and found our room was clean but vacant of furniture.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vacancy',
    definition: 'An unoccupied position or job; or an empty space or room',
    example: 'The hotel had no vacancies for the weekend.',
    partOfSpeech: 'noun'
  },
  {
    word: 'consultant',
    definition: 'A person who provides expert advice professionally',
    example: 'The company hired a consultant to help improve their marketing strategy.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dimension',
    definition: 'A measurable extent of a particular kind, such as length, breadth, depth, or height',
    example: 'The room\'s dimensions were too small for the new furniture.',
    partOfSpeech: 'noun'
  },
  {
    word: 'justify',
    definition: 'To show or prove to be right or reasonable',
    example: 'How can you justify spending so much money on shoes?',
    partOfSpeech: 'verb'
  },
  {
    word: 'distinguish',
    definition: 'To recognize or treat as different; or to be an identifying characteristic',
    example: 'It\'s hard to distinguish between the twins because they look so similar.',
    partOfSpeech: 'verb'
  },
  {
    word: 'malice',
    definition: 'The intention or desire to do evil; ill will',
    example: 'The comment was made without malice; she didn\'t mean to hurt anyone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'petty',
    definition: 'Of little importance; trivial; or marked by smallness of character',
    example: 'They argued over petty issues like who would take out the trash.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pretention',
    definition: 'A claim or assertion of a claim to something',
    example: 'His pretention to be an expert was quickly exposed when he couldn\'t answer basic questions.',
    partOfSpeech: 'noun'
  },
  {
    word: 'discreetly',
    definition: 'In a careful and prudent manner, especially to keep something secret',
    example: 'She discreetly slipped the note into his pocket without anyone noticing.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'immovably',
    definition: 'In a way that cannot be moved or shifted',
    example: 'The large boulder stood immovably at the entrance to the cave.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'prosperous',
    definition: 'Successful in material terms; flourishing financially',
    example: 'The town became prosperous after the new factory opened.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fictitious',
    definition: 'Not real or true; imaginary or fabricated',
    example: 'The novel is set in a fictitious town based on the author\'s hometown.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'controversial',
    definition: 'Giving rise or likely to give rise to controversy or public disagreement',
    example: 'The politician\'s controversial statements led to heated debates.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'disputable',
    definition: 'Open to question; debatable',
    example: 'Whether this is the best solution is highly disputable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'province',
    definition: 'An area of government or professional activity; or a principal administrative division of a country or empire',
    example: 'Quebec is the largest province in Canada.',
    partOfSpeech: 'noun'
  },
  {
    word: 'palatial',
    definition: 'Resembling a palace in being spacious and splendid',
    example: 'They lived in a palatial mansion with twenty rooms.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'potential',
    definition: 'Having or showing the capacity to become or develop into something in the future',
    example: 'The young musician has great potential to become a star.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'substantial',
    definition: 'Of considerable importance, size, or worth',
    example: 'The charity received a substantial donation that will fund their work for years.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'essential',
    definition: 'Absolutely necessary; extremely important',
    example: 'Water is essential for human survival.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'audacity',
    definition: 'Boldness or daring, especially with confident disregard for boundaries or rules',
    example: 'She had the audacity to question the CEO\'s decision in front of everyone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'superstition',
    definition: 'A widely held but irrational belief in supernatural influences',
    example: 'It\'s a common superstition that breaking a mirror brings seven years of bad luck.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conceal',
    definition: 'To hide or keep from revealing or showing',
    example: 'She tried to conceal her disappointment when she didn\'t get the job.',
    partOfSpeech: 'verb'
  },
  {
    word: 'devious',
    definition: 'Showing a skillful use of dishonest tactics to achieve goals',
    example: 'His devious plan to cheat the company was discovered before he could carry it out.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'equestrian',
    definition: 'Relating to horse riding; or a horse rider',
    example: 'She competed in several equestrian events at the Olympics.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'inexplicably',
    definition: 'In a way that cannot be explained or accounted for',
    example: 'He inexplicably failed to show up for the important meeting.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'redundant',
    definition: 'Not or no longer needed or useful; superfluous',
    example: 'With the new system, the old filing method became redundant.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ravenous',
    definition: 'Extremely hungry; voracious',
    example: 'After the long hike, the children were ravenous.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'barren',
    definition: 'Too poor to produce much or any vegetation; or showing no results or achievements',
    example: 'The expedition across the barren desert was extremely challenging.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'iridescent',
    definition: 'Showing luminous colors that seem to change when seen from different angles',
    example: 'The soap bubble had an iridescent surface that reflected rainbow colors.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'luminous',
    definition: 'Giving off light; bright or shining',
    example: 'The watch has luminous hands that glow in the dark.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'siege',
    definition: 'A military operation in which enemy forces surround a town or building, cutting off essential supplies',
    example: 'The castle withstood a siege that lasted for three months.',
    partOfSpeech: 'noun'
  },
  {
    word: 'zealous',
    definition: 'Having or showing zeal; enthusiastic and diligent',
    example: 'The zealous student spent every spare moment studying for the exam.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perceive',
    definition: 'To become aware or conscious of something; to come to realize or understand',
    example: 'I perceive a change in his attitude since the incident.',
    partOfSpeech: 'verb'
  },
  {
    word: 'pertaining',
    definition: 'Relating to or concerning something',
    example: 'The lawyer asked questions pertaining to the accident.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'federal',
    definition: 'Having or relating to a system of government in which power is divided between a central authority and constituent political units',
    example: 'The federal government passed a new law affecting all states.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'juvenile',
    definition: 'A young person; or relating to or characteristic of young people',
    example: 'The juvenile court system handles cases involving underage offenders.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'excess',
    definition: 'An amount that is more than the normal, necessary, or desirable',
    example: 'The excess food from the party was donated to a local shelter.',
    partOfSpeech: 'noun'
  },
  {
    word: 'excessively',
    definition: 'To a degree that is more than necessary, normal, or desirable',
    example: 'The report was excessively long and contained unnecessary details.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'notorious',
    definition: 'Famous or well-known, typically for some bad quality or deed',
    example: 'The area is notorious for its high crime rate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'conduct',
    definition: 'The manner in which a person behaves; or to organize and carry out',
    example: 'His professional conduct during the crisis was admirable.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'prying eyes',
    definition: 'People who are trying to see or find out things that do not concern them',
    example: 'She hid the present from prying eyes until the birthday party.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'presence',
    definition: 'The state or fact of existing, occurring, or being present',
    example: 'The presence of security cameras deterred thieves.',
    partOfSpeech: 'noun'
  },
  {
    word: 'deduce',
    definition: 'To arrive at a fact or a conclusion by reasoning from known facts',
    example: 'From the evidence, the detective was able to deduce who committed the crime.',
    partOfSpeech: 'verb'
  },
  {
    word: 'imply',
    definition: 'To indicate or suggest without being explicitly stated',
    example: 'His silence seemed to imply agreement with the proposal.',
    partOfSpeech: 'verb'
  },
  {
    word: 'conclude',
    definition: 'To bring or come to an end; or to arrive at a judgment or opinion by reasoning',
    example: 'Based on the data, scientists concluded that climate change is accelerating.',
    partOfSpeech: 'verb'
  },
  {
    word: 'anecdote',
    definition: 'A short and amusing or interesting story about a real incident or person',
    example: 'The grandfather entertained the children with anecdotes from his childhood.',
    partOfSpeech: 'noun'
  },
  {
    word: 'emotive',
    definition: 'Arousing or able to arouse intense feeling',
    example: 'The emotive issue of gun control divides many communities.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'idiom',
    definition: 'A group of words established by usage as having a meaning not deducible from the meanings of the individual words',
    example: '"Under the weather" is an idiom that means feeling ill.',
    partOfSpeech: 'noun'
  },
  {
    word: 'imponderable',
    definition: 'A factor that is difficult or impossible to estimate or assess',
    example: 'The weather is an imponderable that could affect the outdoor event.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ponder',
    definition: 'To think about something carefully, especially before making a decision',
    example: 'She sat by the window to ponder her next career move.',
    partOfSpeech: 'verb'
  },
  {
    word: 'determiner',
    definition: 'A word that determines the kind of reference a noun has, such as "a," "the," "this," "my"',
    example: 'In the phrase "my book," the word "my" is a determiner.',
    partOfSpeech: 'noun'
  },
  {
    word: 'endure',
    definition: 'To suffer something difficult, unpleasant, or painful; or to remain in existence',
    example: 'The old building has endured for over 200 years despite many storms.',
    partOfSpeech: 'verb'
  },
  {
    word: 'intriguing',
    definition: 'Arousing one\'s curiosity or interest; fascinating',
    example: 'The detective found an intriguing clue at the crime scene.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'leverage',
    definition: 'The use of something to maximum advantage; or the exertion of force by means of a lever',
    example: 'The company used its market position to leverage better deals with suppliers.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'incessantly',
    definition: 'Without interruption; constantly',
    example: 'The baby cried incessantly throughout the night.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'repellent',
    definition: 'Causing disgust or distaste; or a substance that repels something, especially an insect or other pest',
    example: 'The hikers applied mosquito repellent before entering the woods.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'excerpt',
    definition: 'A short extract from a film, broadcast, or piece of music or writing',
    example: 'The magazine published an excerpt from her forthcoming novel.',
    partOfSpeech: 'noun'
  },
  {
    word: 'proceeds',
    definition: 'Money obtained from an event or activity',
    example: 'All proceeds from the concert will go to charity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'novel',
    definition: 'A fictitious prose narrative of book length; or new and original, not like anything seen before',
    example: 'Her first novel won a prestigious literary award.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'noble',
    definition: 'Having or showing fine personal qualities or high moral principles',
    example: 'It was noble of him to take the blame to protect his friend.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'famished',
    definition: 'Extremely hungry',
    example: 'After the long hike, they were famished and quickly ate their lunch.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'baring',
    definition: 'Uncovering and exposing to view',
    example: 'Baring her teeth in a snarl, the dog warned the intruder to back away.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'bare',
    definition: 'Without covering or clothing; or minimal and basic',
    example: 'The trees were bare in winter after losing all their leaves.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'moral',
    definition: 'Concerned with the principles of right and wrong behavior',
    example: 'The story teaches a moral lesson about honesty.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'covet',
    definition: 'To yearn to possess or have something that belongs to another',
    example: 'She coveted her neighbor\'s new car.',
    partOfSpeech: 'verb'
  },
  {
    word: 'beauty spot',
    definition: 'A particularly beautiful or scenic place; or a small dark artificial mark worn on the face',
    example: 'The lake is a well-known beauty spot popular with tourists.',
    partOfSpeech: 'noun'
  },
  {
    word: 'astute',
    definition: 'Having or showing an ability to accurately assess situations',
    example: 'The astute investor recognized the potential in the startup company.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'psalm',
    definition: 'A sacred song or poem used in worship, especially one from the Book of Psalms in the Bible',
    example: 'The choir sang Psalm 23 during the service.',
    partOfSpeech: 'noun'
  },
  {
    word: 'puny',
    definition: 'Small and weak',
    example: 'His puny efforts to lift the heavy box made everyone laugh.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perceptive',
    definition: 'Having or showing sensitive insight',
    example: 'Her perceptive comments showed that she understood the complex situation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'stoop',
    definition: 'To bend one\'s head or body forward and downward',
    example: 'He had to stoop to enter the low doorway.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mutate',
    definition: 'To change or cause to change in form or nature',
    example: 'The virus can mutate rapidly, making it difficult to develop effective vaccines.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prolong',
    definition: 'To extend the duration of something',
    example: 'Medical treatment can prolong the lives of many cancer patients.',
    partOfSpeech: 'verb'
  },
  {
    word: 'couch potato',
    definition: 'A person who spends a lot of time sitting or lying down, usually watching television',
    example: 'He became a couch potato during his summer vacation, watching TV all day.',
    partOfSpeech: 'noun'
  },
  {
    word: 'calcium',
    definition: 'A chemical element essential for living organisms, especially for bone formation',
    example: 'Milk and cheese are good sources of calcium.',
    partOfSpeech: 'noun'
  },
  {
    word: 'framework',
    definition: 'A basic structure underlying a system, concept, or text',
    example: 'The constitution provides the framework for our legal system.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pioneer',
    definition: 'A person who is among the first to explore or settle a new area; or develop or be the first to use a new method',
    example: 'Marie Curie was a pioneer in the field of radioactivity.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'lapse',
    definition: 'A brief or temporary failure of concentration, memory, or judgment',
    example: 'He had a momentary lapse of attention and drove through a red light.',
    partOfSpeech: 'noun'
  },
  {
    word: 'vacuum',
    definition: 'A space entirely devoid of matter; or a vacuum cleaner',
    example: 'In a perfect vacuum, sound cannot travel.',
    partOfSpeech: 'noun'
  },
  {
    word: 'confess',
    definition: 'To admit or state that one has committed a crime or done something wrong',
    example: 'The suspect finally confessed to the robbery.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hypochondriac',
    definition: 'A person who is abnormally anxious about their health',
    example: 'As a hypochondriac, he visited doctors frequently convinced he had serious illnesses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'psychology',
    definition: 'The scientific study of the mind and behavior',
    example: 'She studied psychology at university before becoming a counselor.',
    partOfSpeech: 'noun'
  },
  {
    word: 'insubstantial',
    definition: 'Lacking substance or material existence; flimsy or slight',
    example: 'His arguments were insubstantial and easily disproven.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dusk',
    definition: 'The darker stage of twilight in the evening',
    example: 'The park closes at dusk for safety reasons.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dawn',
    definition: 'The first appearance of light in the sky before sunrise',
    example: 'They woke up at dawn to start their journey before the heat of the day.',
    partOfSpeech: 'noun'
  },
  {
    word: 'secluded',
    definition: 'Not seen or visited by many people; private and quiet',
    example: 'They spent their honeymoon in a secluded cabin in the mountains.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sow',
    definition: 'Plant seed by scattering it on or in the earth; or an adult female pig',
    example: 'Farmers sow their fields in spring to prepare for the summer growing season.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'hog',
    definition: 'A domesticated pig, especially one raised for slaughter; or to take or use more than one\'s share',
    example: 'Don\'t hog all the blankets on a cold night.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'stocky',
    definition: 'Short and heavily built',
    example: 'The stocky wrestler had a powerful stance in the ring.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'arid',
    definition: 'Very dry and without enough rain for plants to grow',
    example: 'Cacti are adapted to survive in arid desert conditions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'humble',
    definition: 'Having or showing a modest or low estimate of one\'s own importance',
    example: 'Despite his fame, the actor remained humble and grateful to his fans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'candid',
    definition: 'Truthful and straightforward; frank',
    example: 'She gave a candid account of her experiences during the war.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'extraordinary',
    definition: 'Very unusual, special, unexpected, or strange',
    example: 'The scientist made an extraordinary discovery that changed our understanding of physics.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'advocate',
    definition: 'To publicly recommend or support; or a person who supports a particular cause',
    example: 'She advocates for children\'s rights in developing countries.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'to wolf down',
    definition: 'To eat something very quickly and in large amounts',
    example: 'The hungry teenagers wolfed down the pizza in minutes.',
    partOfSpeech: 'phrase'
  },
  {
    word: 'acquittal',
    definition: 'A judgment that a person is not guilty of the crime with which they have been charged',
    example: 'The jury\'s acquittal of the defendant surprised many who had followed the trial.',
    partOfSpeech: 'noun'
  },
  {
    word: 'comprising',
    definition: 'Consisting of; made up of',
    example: 'The committee comprising five experts will review the proposal.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'lone',
    definition: 'Single; solitary; being the only one',
    example: 'A lone figure stood at the edge of the cliff watching the sunset.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'laceration',
    definition: 'A deep cut or tear in skin or flesh',
    example: 'The doctor treated the laceration on his arm with several stitches.',
    partOfSpeech: 'noun'
  },
  {
    word: 'succulent',
    definition: 'Having thick fleshy leaves that store water; or juicy and tender (of food)',
    example: 'Cacti are succulent plants adapted to survive in desert conditions.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'meandering',
    definition: 'Following a winding course; or moving aimlessly from one subject to another',
    example: 'The river\'s meandering path created a beautiful landscape.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'conduct',
    definition: 'The manner in which a person behaves; or to direct the performance of',
    example: 'His professional conduct was praised by his colleagues.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'frailty',
    definition: 'The condition of being weak and delicate; or a particular weakness',
    example: 'Despite his physical frailty, his mind remained sharp.',
    partOfSpeech: 'noun'
  },
  {
    word: 'adept',
    definition: 'Very skilled or proficient at something',
    example: 'She was adept at solving complex mathematical problems.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'clammy',
    definition: 'Unpleasantly damp and sticky',
    example: 'Fear made his hands clammy with sweat.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'brisk',
    definition: 'Quick, active, and energetic; or cold but invigorating',
    example: 'They took a brisk walk through the park on the cool autumn morning.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'grit',
    definition: 'Small particles of stone or sand; or courage and resolve',
    example: 'It takes grit to continue trying after repeated failures.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wear',
    definition: 'To have clothing or accessories on one\'s body; or to damage through continued use',
    example: 'She decided to wear her blue dress to the party.',
    partOfSpeech: 'verb'
  },
  {
    word: 'sear',
    definition: 'To burn or scorch with sudden intense heat',
    example: 'The chef will sear the steak before finishing it in the oven.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hydrocarbon',
    definition: 'A compound of hydrogen and carbon, such as any of those that are the chief components of petroleum and natural gas',
    example: 'Fossil fuels like oil and natural gas consist primarily of hydrocarbons.',
    partOfSpeech: 'noun'
  },
  {
    word: 'kryptonite',
    definition: 'A fictional substance that weakens Superman; or metaphorically, a person\'s weakness',
    example: 'Chocolate is my kryptonite—I simply cannot resist it.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dastardly',
    definition: 'Wicked and cruel',
    example: 'The villain\'s dastardly plan was foiled by the hero.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'silt',
    definition: 'Fine sand, clay, or other material carried by running water and deposited as sediment',
    example: 'The river delta was formed by silt deposits over thousands of years.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tantalize',
    definition: 'To tease or torment by presenting something desirable but continuously out of reach',
    example: 'The aroma from the kitchen tantalized the hungry guests.',
    partOfSpeech: 'verb'
  },
  {
    word: 'shun',
    definition: 'To persistently avoid, ignore, or reject through antipathy or caution',
    example: 'She chose to shun social media to focus on her studies.',
    partOfSpeech: 'verb'
  },
  {
    word: 'primal',
    definition: 'Relating to an early stage in evolutionary development; primary or fundamental',
    example: 'The discovery awakened a primal fear in the explorers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lanky',
    definition: 'Ungracefully tall and thin',
    example: 'The lanky teenager towered over his classmates.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'yank',
    definition: 'To pull with a quick, strong movement',
    example: 'She yanked the door open when she heard the doorbell.',
    partOfSpeech: 'verb'
  },
  {
    word: 'crepe',
    definition: 'A light, thin fabric with a wrinkled surface; or a thin pancake',
    example: 'They ordered crepes with strawberries and cream for breakfast.',
    partOfSpeech: 'noun'
  },
  {
    word: 'cache',
    definition: 'A collection of items stored in a hidden or inaccessible place',
    example: 'The archaeologists discovered a cache of ancient coins buried near the temple.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wither',
    definition: 'To become dry and shriveled; or to decay or decline',
    example: 'Without water, the plants will wither and die.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hither and thither',
    definition: 'Here and there; to various places',
    example: 'The children ran hither and thither on the playground.',
    partOfSpeech: 'phrase'
  },
  {
    word: 'forsake',
    definition: 'To abandon or leave entirely; to renounce',
    example: 'He would never forsake his principles, even under pressure.',
    partOfSpeech: 'verb'
  },
  {
    word: 'belittle',
    definition: 'To make someone or something seem unimportant',
    example: 'A good teacher never belittles students\' questions.',
    partOfSpeech: 'verb'
  },
  {
    word: 'solace',
    definition: 'Comfort or consolation in a time of distress or sadness',
    example: 'She found solace in music after losing her job.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grater',
    definition: 'A kitchen utensil with a rough surface used for grating food',
    example: 'She used a grater to prepare the cheese for the pasta dish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'orate',
    definition: 'To speak formally and at length; to deliver an oration',
    example: 'The politician orated for nearly an hour about economic reform.',
    partOfSpeech: 'verb'
  },
  {
    word: 'overt',
    definition: 'Done or shown openly; plainly or readily apparent, not secret or hidden',
    example: 'There was an overt attempt to influence the judge\'s decision.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'char',
    definition: 'To partially burn so as to blacken the surface',
    example: 'The chef will char the peppers to remove their skins.',
    partOfSpeech: 'verb'
  },
  {
    word: 'covert',
    definition: 'Not openly acknowledged or displayed; secret',
    example: 'The spy was involved in covert operations for many years.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vertebrae',
    definition: 'The series of small bones forming the backbone',
    example: 'The doctor examined the X-ray to check for damage to the vertebrae in her spine.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'foment',
    definition: 'To instigate or stir up (an undesirable situation)',
    example: 'The politician was accused of trying to foment discord among different community groups.',
    partOfSpeech: 'verb'
  },
  {
    word: 'adulterate',
    definition: 'To make something poorer in quality by adding another substance',
    example: 'Some companies illegally adulterate their food products with cheaper ingredients.',
    partOfSpeech: 'verb'
  },
  {
    word: 'queasiness',
    definition: 'A feeling of nausea or being sick to one\'s stomach',
    example: 'The rough boat ride caused queasiness among many of the passengers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tolerate',
    definition: 'To allow the existence or occurrence of something without interference',
    example: 'She could not tolerate any form of dishonesty in her classroom.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tranquil',
    definition: 'Free from disturbance; calm and peaceful',
    example: 'The lake was tranquil, with not even a ripple disturbing its surface.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'coerce',
    definition: 'To persuade someone to do something by using force or threats',
    example: 'The witness claimed she was coerced into giving false testimony.',
    partOfSpeech: 'verb'
  },
  {
    word: 'coercion',
    definition: 'The practice of forcing someone to do something by using threats or violence',
    example: 'The confession was obtained through coercion and was therefore inadmissible in court.',
    partOfSpeech: 'noun'
  },
  {
    word: 'urban',
    definition: 'Relating to or characteristic of a town or city',
    example: 'Urban areas typically have higher population densities than rural ones.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'criticism',
    definition: 'The expression of disapproval based on perceived faults or mistakes',
    example: 'She offered constructive criticism to help improve the project.',
    partOfSpeech: 'noun'
  },
  {
    word: 'putrid',
    definition: 'Decaying or rotting and having a foul smell',
    example: 'The putrid odor from the garbage bin filled the alleyway.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inhospitable',
    definition: 'Not friendly or welcoming to visitors or guests; harsh and difficult to live in',
    example: 'The desert is an inhospitable environment for most plants.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inauthentic',
    definition: 'Not genuine or real; fake or false',
    example: 'The expert identified the painting as an inauthentic copy of the original.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inexpensive',
    definition: 'Not costing a lot of money; affordable',
    example: 'They found an inexpensive hotel for their vacation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'proposal',
    definition: 'A plan or suggestion put forward for consideration',
    example: 'The committee will review the proposal for the new park next week.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dissent',
    definition: 'The expression of opinions that disagree with officially accepted ideas',
    example: 'The teacher encouraged students to voice their dissent during class discussions.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'consent',
    definition: 'Permission or agreement to do something',
    example: 'The parents gave their consent for the child to go on the field trip.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'jovial',
    definition: 'Cheerful and friendly',
    example: 'The jovial host made everyone feel welcome at the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sympathy',
    definition: 'Feelings of pity and sorrow for someone else\'s misfortune',
    example: 'They expressed their sympathy to the family after hearing about the accident.',
    partOfSpeech: 'noun'
  },
  {
    word: 'aversion',
    definition: 'A strong dislike or disinclination',
    example: 'She has an aversion to spicy food and avoids it completely.',
    partOfSpeech: 'noun'
  },
  {
    word: 'coracle',
    definition: 'A small, round boat made of wickerwork covered with a waterproof material, traditionally used in Wales',
    example: 'The fisherman used a coracle to navigate the shallow waters of the river.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conspicuous',
    definition: 'Easily seen or noticed; attracting attention',
    example: 'His bright orange hat made him conspicuous in the crowd.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'extravagance',
    definition: 'The quality of being showy, unnecessary or wasteful; lack of restraint in spending money',
    example: 'The golden taps in the bathroom were seen as an unnecessary extravagance.',
    partOfSpeech: 'noun'
  },
  {
    word: 'disgruntled',
    definition: 'Angry or dissatisfied',
    example: 'The disgruntled employees filed a complaint about working conditions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'manila',
    definition: 'A type of durable paper or envelope made from hemp, used for folders or heavy paper work',
    example: 'She filed the documents in a manila folder for safekeeping.',
    partOfSpeech: 'noun'
  },
  {
    word: 'brigand',
    definition: 'A member of a gang that ambushes and robs people; a bandit',
    example: 'In the story, the travelers were attacked by brigands on the mountain pass.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gawping',
    definition: 'Staring in a stupid or rude manner, often with the mouth open',
    example: 'The tourists were gawping at the unusual street performer.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'carnage',
    definition: 'The killing of a large number of people; slaughter',
    example: 'The historical account described the carnage of the ancient battle.',
    partOfSpeech: 'noun'
  },
  {
    word: 'forlorn',
    definition: 'Pitifully sad and abandoned or lonely',
    example: 'The forlorn puppy sat in the corner of its cage at the shelter.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'apprehend',
    definition: 'To arrest someone for a crime; or to understand or grasp an idea',
    example: 'The police were able to apprehend the suspect after a brief chase.',
    partOfSpeech: 'verb'
  },
  {
    word: 'quilts',
    definition: 'Thick bed coverings made of padding enclosed between layers of fabric and kept in place by lines of stitching',
    example: 'Grandmother made beautiful handmade quilts for each of her grandchildren.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'constant',
    definition: 'Occurring continuously over a period of time; unchanging',
    example: 'The constant noise from the construction site made it hard to concentrate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'diligent',
    definition: 'Having or showing care and conscientiousness in one\'s work or duties',
    example: 'The diligent student spent extra hours studying for the exam.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'impudent',
    definition: 'Not showing due respect; impertinent',
    example: 'The teacher was shocked by the student\'s impudent response to a simple question.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dishevel',
    definition: 'To make untidy or disarranged',
    example: 'The strong wind disheveled her neatly combed hair.',
    partOfSpeech: 'verb'
  },
  {
    word: 'spouse',
    definition: 'A husband or wife, considered in relation to their partner',
    example: 'The invitation was extended to employees and their spouses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ally',
    definition: 'A person, group, or nation that is associated with another for some common cause or purpose',
    example: 'The two countries became allies during the war.',
    partOfSpeech: 'noun'
  },
  {
    word: 'corvid',
    definition: 'A bird of the crow family, including crows, ravens, rooks, jackdaws, jays, and magpies',
    example: 'Ravens are large corvids known for their intelligence and problem-solving abilities.',
    partOfSpeech: 'noun'
  },
  {
    word: 'virtue',
    definition: 'Behavior showing high moral standards; a good or useful quality',
    example: 'Patience is a virtue when teaching young children.',
    partOfSpeech: 'noun'
  },
  {
    word: 'obscure',
    definition: 'Not well known or famous; difficult to understand',
    example: 'She enjoys reading obscure poetry that few people have heard of.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'obstinate',
    definition: 'Stubbornly refusing to change one\'s opinion or course of action',
    example: 'The obstinate child refused to eat his vegetables despite his parents\' persuasion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'deviousness',
    definition: 'The quality of being skillful in using dishonest or underhand tactics',
    example: 'Her deviousness enabled her to manipulate the situation to her advantage.',
    partOfSpeech: 'noun'
  },
  {
    word: 'guile',
    definition: 'Sly or cunning intelligence; crafty deceit',
    example: 'The fox is often portrayed in fables as having great guile.',
    partOfSpeech: 'noun'
  },
  {
    word: 'exacerbate',
    definition: 'To make a problem, bad situation, or negative feeling worse',
    example: 'The harsh criticism only exacerbated his feelings of inadequacy.',
    partOfSpeech: 'verb'
  },
  {
    word: 'aggravate',
    definition: 'To make a problem, injury, or offense worse or more serious',
    example: 'Running will aggravate your knee injury if you don\'t rest it properly.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mitigate',
    definition: 'To make less severe, serious, or painful',
    example: 'Taking medication helped mitigate the symptoms of her cold.',
    partOfSpeech: 'verb'
  },
  {
    word: 'dear',
    definition: 'Regarded with deep affection; greatly loved; or expensive',
    example: 'My dear friend, it\'s been too long since we last spoke.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flawless',
    definition: 'Without any imperfections or faults; perfect',
    example: 'The diamond was completely flawless and worth a fortune.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'effable',
    definition: 'Able to be described in words',
    example: 'Some experiences are so profound that they are hardly effable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'asunder',
    definition: 'Into pieces; apart',
    example: 'The explosion tore the building asunder.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'bemused',
    definition: 'Puzzled, confused, or bewildered',
    example: 'He had a bemused expression as he tried to follow the complex instructions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'amuse',
    definition: 'To cause someone to find something funny or entertaining',
    example: 'The clown\'s antics amused the children at the party.',
    partOfSpeech: 'verb'
  },
  {
    word: 'arduous',
    definition: 'Involving or requiring strenuous effort; difficult and tiring',
    example: 'The journey across the mountain was arduous but worth it for the view.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'antiquity',
    definition: 'The ancient past, especially the period before the Middle Ages; an object from ancient times',
    example: 'The museum contains artifacts from antiquity that are over 3,000 years old.',
    partOfSpeech: 'noun'
  },
  {
    word: 'milliner',
    definition: 'A person who makes or sells women\'s hats',
    example: 'The milliner created an elaborate hat for the customer to wear to the horse race.',
    partOfSpeech: 'noun'
  },
  {
    word: 'stubbly',
    definition: 'Covered with or consisting of short, stiff hairs or projections',
    example: 'His stubbly chin showed he hadn\'t shaved for a couple of days.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'decrepit',
    definition: 'Worn out or ruined because of age or neglect',
    example: 'The decrepit old building was scheduled for demolition.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'allure',
    definition: 'The quality of being powerfully and mysteriously attractive or fascinating',
    example: 'The allure of foreign travel tempted her to spend her savings on a trip.',
    partOfSpeech: 'noun'
  },
  {
    word: 'alpine',
    definition: 'Relating to high mountains, especially the Alps; growing on mountains above the tree line',
    example: 'Alpine flowers thrive in cold, high-altitude environments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'animosity',
    definition: 'Strong hostility or opposition',
    example: 'Despite years of animosity between them, the two siblings eventually reconciled.',
    partOfSpeech: 'noun'
  },
  {
    word: 'hostility',
    definition: 'Unfriendly or antagonistic attitudes or behavior; opposition or resistance',
    example: 'The hostility between the two neighboring countries has lasted for decades.',
    partOfSpeech: 'noun'
  },
  {
    word: 'misdemeanour',
    definition: 'A minor wrongdoing; a minor criminal offense',
    example: 'Jaywalking is considered a minor misdemeanour in most cities.',
    partOfSpeech: 'noun'
  },
  {
    word: 'transgression',
    definition: 'An act that goes against a law, rule, or code of conduct; a sin',
    example: 'The student apologized for his transgression of the school rules.',
    partOfSpeech: 'noun'
  },
  {
    word: 'offence',
    definition: 'An illegal act; a thing causing someone to feel resentful or upset',
    example: 'He apologized, not wanting to cause any offence by his comments.',
    partOfSpeech: 'noun'
  },
  {
    word: 'digress',
    definition: 'To leave the main subject temporarily in speech or writing',
    example: 'Let me digress for a moment to explain how this technology works.',
    partOfSpeech: 'verb'
  },
  {
    word: 'blemish',
    definition: 'A small mark or flaw that spoils the appearance of something',
    example: 'The car was in perfect condition, without a single blemish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'kink',
    definition: 'A sharp twist or curl in something that is otherwise straight; or an unusual or peculiar characteristic',
    example: 'There was a kink in the garden hose that stopped the water flow.',
    partOfSpeech: 'noun'
  },
  {
    word: 'abscond',
    definition: 'To leave hurriedly and secretly, typically to escape from custody or avoid prosecution',
    example: 'The suspect absconded before the police could arrest him.',
    partOfSpeech: 'verb'
  },
  {
    word: 'potential',
    definition: 'Having or showing the capacity to become or develop into something in the future',
    example: 'The young athlete has the potential to become a champion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'respite',
    definition: 'A short period of rest or relief from something difficult or unpleasant',
    example: 'The cool breeze provided a welcome respite from the summer heat.',
    partOfSpeech: 'noun'
  },
  {
    word: 'recuperate',
    definition: 'To recover from illness or exertion',
    example: 'After the surgery, she took two weeks off work to recuperate.',
    partOfSpeech: 'verb'
  },
  {
    word: 'deception',
    definition: 'The act of deliberately causing someone to believe something that is not true',
    example: 'The magician\'s performance relied on skillful deception to create illusions.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inception',
    definition: 'The beginning or founding of something; the establishment',
    example: 'The company has grown significantly since its inception five years ago.',
    partOfSpeech: 'noun'
  },
  {
    word: 'boundless',
    definition: 'Having no bounds; unlimited or immense',
    example: 'The parent\'s boundless love supported the child through difficult times.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'falter',
    definition: 'To lose strength or momentum; to hesitate or stumble',
    example: 'His voice began to falter as he became more nervous during the speech.',
    partOfSpeech: 'verb'
  },
  {
    word: 'finite',
    definition: 'Having limits or bounds; not infinite or endless',
    example: 'We must use our finite resources wisely to ensure they last.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'resonate',
    definition: 'To produce or be filled with a deep, full, reverberating sound; or to evoke a strong feeling or memory',
    example: 'His story about overcoming obstacles resonated with the audience.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prophecy',
    definition: 'A prediction of what will happen in the future',
    example: 'According to the ancient prophecy, a great leader would emerge during times of trouble.',
    partOfSpeech: 'noun'
  },
  {
    word: 'aphid',
    definition: 'A small sap-sucking insect that commonly attacks vegetation',
    example: 'The gardener used ladybugs to naturally control aphids on her plants.',
    partOfSpeech: 'noun'
  },
  {
    word: 'articulate',
    definition: 'Having or showing the ability to speak fluently and coherently; or to express ideas clearly',
    example: 'The articulate speaker kept the audience engaged throughout the presentation.',
    partOfSpeech: 'adjective/verb'
  },
  {
    word: 'ability',
    definition: 'Possession of the means or skill to do something',
    example: 'Her ability to solve complex problems quickly impressed her teachers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gutless',
    definition: 'Lacking courage or determination',
    example: 'It would be gutless to give up without even trying.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'undeterred',
    definition: 'Not discouraged or prevented from proceeding',
    example: 'Undeterred by the rain, the hikers continued along the trail.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'enunciate',
    definition: 'To say or pronounce clearly',
    example: 'The speech teacher asked students to enunciate each syllable carefully.',
    partOfSpeech: 'verb'
  },
  {
    word: 'benign',
    definition: 'Gentle and kind; not harmful or malicious',
    example: 'The tumor was benign and not a cause for serious concern.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'instill',
    definition: 'To gradually but firmly establish an idea or attitude in a person\'s mind',
    example: 'Parents try to instill good values in their children from a young age.',
    partOfSpeech: 'verb'
  },
  {
    word: 'retort',
    definition: 'To reply sharply in a witty or angry way',
    example: 'When criticized, she was quick to retort with a clever comeback.',
    partOfSpeech: 'verb'
  },
  {
    word: 'commence',
    definition: 'To begin or start',
    example: 'The ceremony will commence at noon.',
    partOfSpeech: 'verb'
  },
  {
    word: 'propagate',
    definition: 'To breed or multiply by natural reproduction; or to spread and promote an idea or knowledge',
    example: 'The gardener learned how to propagate plants from cuttings.',
    partOfSpeech: 'verb'
  },
  {
    word: 'unify',
    definition: 'To make or become united or uniform',
    example: 'The leader worked to unify the different factions within the organization.',
    partOfSpeech: 'verb'
  },
  {
    word: 'terminate',
    definition: 'To bring to an end; conclude',
    example: 'The company decided to terminate the project due to budget constraints.',
    partOfSpeech: 'verb'
  },
  {
    word: 'impersonate',
    definition: 'To pretend to be another person for entertainment or fraud',
    example: 'The comedian was skilled at impersonating famous politicians.',
    partOfSpeech: 'verb'
  },
  {
    word: 'concise',
    definition: 'Giving a lot of information clearly and in a few words; brief but comprehensive',
    example: 'The manual provides concise instructions that are easy to follow.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'erroneous',
    definition: 'Wrong; incorrect',
    example: 'The newspaper published an erroneous report and later issued a correction.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'embellish',
    definition: 'To make more attractive by adding ornament, color, etc.; or to make a statement or story more interesting by adding untrue details',
    example: 'She tended to embellish her travel stories to make them more exciting.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fortify',
    definition: 'To strengthen or invigorate; to provide with defensive works',
    example: 'The walls were fortified to protect the castle from invaders.',
    partOfSpeech: 'verb'
  },
  {
    word: 'remedy',
    definition: 'A medicine or treatment for a disease or injury; or a way of solving or correcting a problem',
    example: 'Regular exercise is a good remedy for stress.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'loiter',
    definition: 'To stand or wait around idly without apparent purpose',
    example: 'Signs warned people not to loiter near the entrance to the building.',
    partOfSpeech: 'verb'
  },
  {
    word: 'apprehension',
    definition: 'Anxiety or fear that something bad or unpleasant will happen; or understanding',
    example: 'There was some apprehension among team members about the new project.',
    partOfSpeech: 'noun'
  },
  {
    word: 'fable',
    definition: 'A short story, typically with animals as characters, conveying a moral',
    example: 'Aesop\'s fables have been teaching moral lessons for centuries.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gratification',
    definition: 'Pleasure, especially when gained from the satisfaction of a desire',
    example: 'The immediate gratification of winning was followed by a sense of accomplishment.',
    partOfSpeech: 'noun'
  },
  {
    word: 'supercalifragilisticexpialidocious',
    definition: 'Extraordinarily good; wonderful',
    example: 'In the film Mary Poppins, the magical nanny describes the joy of the fair as being absolutely supercalifragilisticexpialidocious.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intrigue',
    definition: 'To arouse the curiosity or interest of; fascinate; or to make secret plans to harm someone',
    example: 'The mysterious package intrigued everyone in the office.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'arouse',
    definition: 'To evoke or awaken a feeling, emotion, or response',
    example: 'The controversial speech aroused strong reactions from the audience.',
    partOfSpeech: 'verb'
  },
  {
    word: 'metamorphism',
    definition: 'The process of transformation, especially a change in the structure of rock due to heat or pressure',
    example: 'Marble is formed by the metamorphism of limestone under intense heat and pressure.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ambivalent',
    definition: 'Having mixed feelings or contradictory ideas about something or someone',
    example: 'She felt ambivalent about moving to a new city—excited for the opportunity but sad to leave friends behind.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'thicket',
    definition: 'A dense group of bushes or small trees',
    example: 'The rabbit disappeared into the thicket where the hunters couldn\'t follow.',
    partOfSpeech: 'noun'
  },
  {
    word: 'Pourquoi Story',
    definition: 'A fictional narrative that explains why something is the way it is, often found in folklore and children\'s literature',
    example: 'The pourquoi story explained why the tortoise has a cracked shell.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'caters',
    definition: 'Provides food and service for an event; or provides what is required or sought',
    example: 'This restaurant caters for large events like weddings and conferences.',
    partOfSpeech: 'verb (third person)'
  },
  {
    word: 'semicolon',
    definition: 'A punctuation mark (;) indicating a pause, typically between two main clauses, that is more pronounced than that indicated by a comma',
    example: 'The writer used a semicolon to join two closely related independent clauses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'reported speech',
    definition: 'The form of language used to communicate what someone else said without quoting them directly',
    example: 'In reported speech, "I am tired" becomes "He said he was tired."',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'blatant',
    definition: 'Completely obvious and intentional, when referring to bad behavior',
    example: 'His blatant disregard for the rules resulted in immediate disqualification.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'svelte',
    definition: 'Slender and elegant',
    example: 'The dancer had a svelte figure that moved gracefully across the stage.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'botany',
    definition: 'The scientific study of plants',
    example: 'She studied botany to learn more about medicinal plants and their properties.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bountiful',
    definition: 'Large in quantity; abundant',
    example: 'The farm produced a bountiful harvest after the rainy season.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ambient',
    definition: 'Relating to the immediate surroundings; or creating a particular atmosphere or mood',
    example: 'The restaurant used ambient lighting to create a relaxed mood.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'compromise',
    definition: 'An agreement reached by each side making concessions; or to settle a dispute by mutual concession',
    example: 'Through compromise, the two sides were able to reach an agreement.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'superiority',
    definition: 'The quality or state of being better, greater, or stronger than others',
    example: 'The team\'s superiority was evident in their undefeated season.',
    partOfSpeech: 'noun'
  },
  {
    word: 'weighing up',
    definition: 'Carefully considering or assessing the relative qualities of something before making a decision',
    example: 'She spent time weighing up the pros and cons before deciding which job offer to accept.',
    partOfSpeech: 'verb phrase'
  },
  {
    word: 'despise',
    definition: 'To feel contempt or a deep repugnance for',
    example: 'She despises dishonesty in any form.',
    partOfSpeech: 'verb'
  },
  {
    word: 'scathe',
    definition: 'To harm, injure, or damage; to criticize severely',
    example: 'His scathing remarks left her feeling hurt and embarrassed.',
    partOfSpeech: 'verb'
  },
  {
    word: 'haughty',
    definition: 'Arrogantly superior and disdainful',
    example: 'The haughty waiter looked down his nose at customers who didn\'t order expensive wine.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'aloft',
    definition: 'Up in or into the air; overhead',
    example: 'The eagle soared aloft on the warm air currents.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'spoof',
    definition: 'A humorous imitation of something, typically a film or a particular genre of film, in which its characteristic features are exaggerated for comic effect',
    example: 'The comedy show included a hilarious spoof of popular superhero movies.',
    partOfSpeech: 'noun'
  },
  {
    word: 'malicious',
    definition: 'Characterized by malice; intending or intended to do harm',
    example: 'The virus was designed with malicious intent to steal personal information.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'amicable',
    definition: 'Characterized by friendliness and absence of serious disagreement',
    example: 'Despite their divorce, they maintained an amicable relationship for the sake of their children.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'primarily',
    definition: 'For the most part; mainly',
    example: 'The museum is primarily used for educational purposes.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'initial',
    definition: 'Existing or occurring at the beginning',
    example: 'Her initial reaction was one of shock, but she quickly recovered.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'embed',
    definition: 'To fix firmly and deeply in a surrounding mass; to incorporate',
    example: 'The journalist was embedded with troops during the conflict.',
    partOfSpeech: 'verb'
  },
  {
    word: 'preclude',
    definition: 'To prevent from happening; make impossible',
    example: 'His criminal record precluded him from certain types of employment.',
    partOfSpeech: 'verb'
  },
  {
    word: 'commence',
    definition: 'To begin or start',
    example: 'The concert will commence at 8 p.m. sharp.',
    partOfSpeech: 'verb'
  },
  {
    word: 'conclude',
    definition: 'To bring to an end; finish; or to reach a judgment or opinion by reasoning',
    example: 'The meeting concluded with a vote on the proposal.',
    partOfSpeech: 'verb'
  },
  {
    word: 'slob',
    definition: 'A person who is lazy and has low standards of cleanliness',
    example: 'His roommate was a slob who never cleaned up after himself.',
    partOfSpeech: 'noun'
  },
  {
    word: 'marvelled',
    definition: 'Was filled with wonder or astonishment',
    example: 'The tourists marvelled at the magnificent architecture of the ancient temple.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'rampant',
    definition: 'Flourishing or spreading unchecked; unrestrained',
    example: 'Corruption was rampant throughout the organization.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'denounce',
    definition: 'To publicly declare to be wrong or evil; censure',
    example: 'The politician denounced the policy as harmful and unjust.',
    partOfSpeech: 'verb'
  },
  {
    word: 'condemn',
    definition: 'To express complete disapproval of; censure; or to sentence to a particular punishment',
    example: 'The judge condemned the criminal to life in prison.',
    partOfSpeech: 'verb'
  },
  {
    word: 'rigorous',
    definition: 'Extremely thorough, exhaustive, or accurate',
    example: 'The scientist conducted rigorous experiments to test his hypothesis.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'attribute',
    definition: 'To regard as being caused by; or a quality or feature regarded as a characteristic',
    example: 'Experts attribute the decline in crime to better community policing.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'painstaking',
    definition: 'Done with or employing great care and thoroughness',
    example: 'The restoration of the painting was a painstaking process that took years to complete.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fauna',
    definition: 'The animals of a particular region, habitat, or geological period',
    example: 'The island\'s unique fauna includes several species found nowhere else on Earth.',
    partOfSpeech: 'noun'
  },
  {
    word: 'flora',
    definition: 'The plants of a particular region, habitat, or geological period',
    example: 'Desert flora has adapted to survive in hot, dry conditions.',
    partOfSpeech: 'noun'
  },
  {
    word: 'blemish',
    definition: 'A small mark or flaw that spoils the appearance of something',
    example: 'The car was in excellent condition without a single blemish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'herbalist',
    definition: 'A person who practices healing by using herbs and plants',
    example: 'The herbalist recommended chamomile tea to help with sleep problems.',
    partOfSpeech: 'noun'
  },
  {
    word: 'geologist',
    definition: 'A scientist who studies the solid and liquid matter that constitutes the Earth',
    example: 'The geologist examined the rock formations to determine their age.',
    partOfSpeech: 'noun'
  },
  {
    word: 'zoologist',
    definition: 'A scientist who studies the behavior, structure, physiology, classification, and distribution of animals',
    example: 'As a zoologist, she specialized in the study of primate behavior.',
    partOfSpeech: 'noun'
  },
  {
    word: 'impose',
    definition: 'To force or lay (something) on or upon; or to force oneself on others',
    example: 'The government imposed new taxes on luxury goods.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fervour',
    definition: 'Intense and passionate feeling',
    example: 'The speaker addressed the crowd with religious fervour.',
    partOfSpeech: 'noun'
  },
  {
    word: 'surreptitious',
    definition: 'Kept secret, especially because it would not be approved of',
    example: 'She took a surreptitious glance at the answers when the teacher wasn\'t looking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'clandestine',
    definition: 'Kept secret or done secretively, especially because illicit',
    example: 'The spies held clandestine meetings to exchange information.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'co-write',
    definition: 'To write something together with another person',
    example: 'The songwriters decided to co-write the album\'s lead single.',
    partOfSpeech: 'verb'
  },
  {
    word: 'co-author',
    definition: 'To be a joint author of a book, paper, or other written work',
    example: 'The two scientists decided to co-author the research paper.',
    partOfSpeech: 'verb'
  },
  {
    word: 'invalid',
    definition: 'Not valid; null; or a person made weak or disabled by illness or injury',
    example: 'The contract became invalid when he failed to sign it by the deadline.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'fallacious',
    definition: 'Based on a mistaken belief; logically unsound',
    example: 'His argument was fallacious because it relied on incorrect assumptions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'scanty',
    definition: 'Small or insufficient in quantity or amount',
    example: 'The evidence against him was too scanty for a conviction.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'realign',
    definition: 'To change or restore to a different or former position or state',
    example: 'They had to realign their strategy to adapt to the changing market.',
    partOfSpeech: 'verb'
  },
  {
    word: 'convince',
    definition: 'To persuade someone to do something or to believe something is true',
    example: 'Nothing would convince her to change her mind once it was made up.',
    partOfSpeech: 'verb'
  },
  {
    word: 'symposium',
    definition: 'A conference or meeting to discuss a particular subject',
    example: 'Experts from around the world attended the symposium on climate change.',
    partOfSpeech: 'noun'
  },
  {
    word: 'possessive pronoun',
    definition: 'A pronoun that shows ownership, such as "mine," "yours," "his," "hers," "its," "ours," and "theirs"',
    example: 'In the sentence "That book is mine," the word "mine" is a possessive pronoun.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'proverb',
    definition: 'A short, well-known pithy saying, stating a general truth or piece of advice',
    example: '"A stitch in time saves nine" is a proverb about the value of fixing problems early.',
    partOfSpeech: 'noun'
  },
  {
    word: 'putt',
    definition: 'A gentle stroke in golf designed to roll the ball into the hole',
    example: 'He needed just one putt to complete the hole.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'delegate',
    definition: 'A person sent or authorized to represent others; or to entrust a task to another person',
    example: 'She learned to delegate responsibilities to her team members.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'convention',
    definition: 'A way in which something is usually done; or a large meeting of people with a shared interest',
    example: 'By convention, people shake hands when they meet for the first time in formal situations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'transitory',
    definition: 'Not permanent; temporary',
    example: 'Fame can be transitory, especially in the entertainment industry.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perpetual',
    definition: 'Never ending or changing; continuing indefinitely',
    example: 'The perpetual motion of the ocean waves has inspired many poets.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intermittent',
    definition: 'Occurring at irregular intervals; not continuous or steady',
    example: 'The radio signal was intermittent due to the storm.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'conjugate',
    definition: 'To give the different forms of a verb in an ordered way; or to join together',
    example: 'Students learn to conjugate verbs in their different tenses.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inflect',
    definition: 'To change the form of a word to express tense, gender, number, mood, etc.',
    example: 'In English, we inflect verbs to show past tense by usually adding -ed.',
    partOfSpeech: 'verb'
  },
  {
    word: 'accident-prone',
    definition: 'Having a tendency to have more accidents than most people',
    example: 'Her accident-prone nature meant she was always covered in bruises.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'leprechaun',
    definition: 'A mischievous elf in Irish folklore, often associated with hidden treasure',
    example: 'In stories, if you catch a leprechaun, he must lead you to his pot of gold.',
    partOfSpeech: 'noun'
  },
  {
    word: 'fermentation',
    definition: 'The chemical breakdown of a substance by bacteria, yeasts, or other microorganisms, typically involving effervescence and the giving off of heat',
    example: 'The fermentation process turns grape juice into wine.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dithering',
    definition: 'Being indecisive; hesitating between different options',
    example: 'His dithering cost them valuable time when a quick decision was needed.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'immobilise',
    definition: 'To prevent something or someone from moving or operating as normal',
    example: 'The cast will immobilise your broken arm while it heals.',
    partOfSpeech: 'verb'
  },
  {
    word: 'chide',
    definition: 'To scold or rebuke mildly',
    example: 'The teacher chided the students for being noisy in the library.',
    partOfSpeech: 'verb'
  },
  {
    word: 'deferential',
    definition: 'Showing respect and esteem for another\'s authority',
    example: 'The staff were deferential toward their new manager.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fine',
    definition: 'Of high quality; very good; or a sum of money paid as a penalty',
    example: 'The chef prepared a fine meal for the special occasion.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'console',
    definition: 'To comfort someone at a time of grief or disappointment',
    example: 'She tried to console her friend after the loss of a pet.',
    partOfSpeech: 'verb'
  },
  {
    word: 'crevice',
    definition: 'A narrow opening resulting from a split or crack',
    example: 'The lizard hid in a crevice in the rock wall.',
    partOfSpeech: 'noun'
  },
  {
    word: 'fissure',
    definition: 'A long narrow opening or crack in a surface or rock',
    example: 'Water seeped through a fissure in the ceiling.',
    partOfSpeech: 'noun'
  },
  {
    word: 'chasm',
    definition: 'A deep fissure, gap, or gorge in the earth, rock, or another surface',
    example: 'The mountain trail ran alongside a deep chasm.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pursuit',
    definition: 'The action of following or pursuing someone or something; or an activity of a specified kind',
    example: 'The police were in pursuit of the stolen vehicle.',
    partOfSpeech: 'noun'
  },
  {
    word: 'masterful',
    definition: 'Showing great skill or expertise',
    example: 'The artist gave a masterful performance that impressed everyone.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inconsolable',
    definition: 'So unhappy or disappointed that nothing can make one feel better',
    example: 'She was inconsolable after hearing the bad news.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hairy',
    definition: 'Covered with hair; or difficult or dangerous',
    example: 'The climbers faced a hairy situation when the storm moved in.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vacant',
    definition: 'Not occupied; empty; or showing no intelligence or interest',
    example: 'The hotel had several vacant rooms available.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pensive',
    definition: 'Engaged in deep or serious thought; thoughtful',
    example: 'She had a pensive expression as she stared out the window.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'gay',
    definition: 'Lighthearted and carefree; or homosexual',
    example: 'The children were in a gay mood during the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'jocund',
    definition: 'Cheerful and lighthearted',
    example: 'The jocund atmosphere at the festival lifted everyone\'s spirits.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'monotonous',
    definition: 'Dull, tedious, and repetitious; lacking in variety and interest',
    example: 'The monotonous sound of the rain made her feel sleepy.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'provoke',
    definition: 'To stimulate or give rise to a reaction or emotion, typically a strong or unwelcome one',
    example: 'His rude comment was designed to provoke an angry response.',
    partOfSpeech: 'verb'
  },
  {
    word: 'subtle',
    definition: 'So delicate or precise as to be difficult to analyze or describe; or making use of clever and indirect methods',
    example: 'There was a subtle change in her expression when she heard the news.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'relinquish',
    definition: 'To voluntarily cease to keep or claim; to give up',
    example: 'She was forced to relinquish control of the company to her partner.',
    partOfSpeech: 'verb'
  },
  {
    word: 'dissipated',
    definition: 'Scattered or dispersed; or having lost energy, strength, or coherence',
    example: 'The morning fog gradually dissipated as the sun rose higher.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fortnight',
    definition: 'A period of two weeks',
    example: 'They planned to stay at the beach house for a fortnight.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grimace',
    definition: 'A facial expression showing pain, disgust, or disapproval',
    example: 'He made a grimace when he tasted the sour medicine.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'disfigured',
    definition: 'Having one\'s appearance marred by damage or a blemish',
    example: 'The ancient statue was disfigured by years of weathering and vandalism.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'absolve',
    definition: 'To declare someone free from guilt, blame, or responsibility',
    example: 'The judge absolved him of all charges due to lack of evidence.',
    partOfSpeech: 'verb'
  },
  {
    word: 'beloved',
    definition: 'Dearly loved; or a person who is greatly loved',
    example: 'She cherished the gift from her beloved grandmother.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'diminish',
    definition: 'To make or become less; reduce or be reduced',
    example: 'His influence began to diminish as newer stars emerged.',
    partOfSpeech: 'verb'
  },
  {
    word: 'veal',
    definition: 'The meat of a young calf',
    example: 'The restaurant served veal cutlets with a lemon sauce.',
    partOfSpeech: 'noun'
  },
  {
    word: 'the underground',
    definition: 'A secret network of people organized to coordinate resistance or subversive activities; or a subway system',
    example: 'During the war, she worked with the underground to help refugees escape.',
    partOfSpeech: 'noun'
  },
  {
    word: 'negligent',
    definition: 'Failing to take proper care in doing something',
    example: 'The driver was found negligent in causing the accident.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'tabloid',
    definition: 'A newspaper with a smaller page size, typically more sensational content, and more pictures than broadsheets',
    example: 'The tabloid published gossip about celebrities on its front page.',
    partOfSpeech: 'noun'
  },
  {
    word: 'liaise',
    definition: 'To form a working relationship or act as a link between people or groups',
    example: 'The project manager will liaise with all departments to coordinate the launch.',
    partOfSpeech: 'verb'
  },
  {
    word: 'sheer',
    definition: 'Nothing other than; or very steep or completely transparent',
    example: 'The climbers faced a sheer cliff that was nearly impossible to scale.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'detached',
    definition: 'Not joined or connected to something else; or not feeling or showing interest or sympathy',
    example: 'They purchased a detached house with a garden on all sides.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'nude',
    definition: 'Wearing no clothes; naked',
    example: 'The artist specialized in drawing nude figures.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'bogus',
    definition: 'Not genuine or true; fake',
    example: 'The email asking for bank details was bogus and part of a scam.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'spontaneous',
    definition: 'Performed or occurring as a result of a sudden impulse without premeditation',
    example: 'The audience burst into spontaneous applause at the end of the performance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'genuine',
    definition: 'Truly what something is said to be; authentic',
    example: 'Her surprise was genuine when she saw the birthday cake.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'aural',
    definition: 'Relating to the ear or the sense of hearing',
    example: 'The music teacher tested the students\' aural skills by having them identify different notes.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sensual',
    definition: 'Relating to or involving gratification of the senses and physical pleasure',
    example: 'The perfume had a rich, sensual fragrance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hemline',
    definition: 'The level of the lower edge of a garment such as a skirt, dress, or coat',
    example: 'Fashion trends often dictate whether hemlines should be long or short.',
    partOfSpeech: 'noun'
  },
  {
    word: 'patriot',
    definition: 'A person who vigorously supports their country and is prepared to defend it',
    example: 'He was regarded as a patriot for his service to the nation.',
    partOfSpeech: 'noun'
  },
  {
    word: 'monetary',
    definition: 'Relating to money or currency',
    example: 'The charity appreciated both monetary donations and volunteer time.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'canine',
    definition: 'Relating to or resembling a dog or dogs; or a pointed tooth',
    example: 'His research focused on canine behavior in domestic pets.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'feline',
    definition: 'Relating to or resembling a cat or cats',
    example: 'She admired the feline grace with which the dancer moved.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'bovine',
    definition: 'Relating to cattle; or slow and dull',
    example: 'The farmer specialized in bovine health and nutrition.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'tumultuous',
    definition: 'Making an uproar or loud, confused noise; disorderly and noisy',
    example: 'The politician received a tumultuous welcome from the crowd.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'palpitate',
    definition: 'To beat rapidly, flutter, or throb; typically as a result of exertion, emotion, or disease',
    example: 'Her heart began to palpitate with fear as she heard footsteps approaching.',
    partOfSpeech: 'verb'
  },
  {
    word: 'allure',
    definition: 'The quality of being powerfully and mysteriously attractive or fascinating',
    example: 'The allure of the tropical island drew thousands of tourists each year.',
    partOfSpeech: 'noun'
  },
  {
    word: 'trough',
    definition: 'A long, narrow container for feeding or watering animals; or a long depression between waves or in the ocean bed',
    example: 'The farmer filled the trough with fresh water for the horses.',
    partOfSpeech: 'noun'
  },
  {
    word: 'impudent',
    definition: 'Not showing due respect; impertinent or cheeky',
    example: 'The child\'s impudent remarks to the teacher earned him a detention.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sconce',
    definition: 'A wall bracket for holding candles or lights',
    example: 'The hallway was dimly lit by antique sconces along the walls.',
    partOfSpeech: 'noun'
  },
  {
    word: 'unmannerly',
    definition: 'Not having or showing good manners; impolite',
    example: 'It is unmannerly to talk with your mouth full of food.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'unruly',
    definition: 'Disorderly and disruptive; not amenable to discipline or control',
    example: 'The teacher struggled to control the unruly class of teenagers.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'equilibrium',
    definition: 'A state of balance or a calm state of mind; mental or emotional balance',
    example: 'After the crisis, it took some time for the market to return to equilibrium.',
    partOfSpeech: 'noun'
  },
  {
    word: 'auburn',
    definition: 'Reddish-brown in color, especially of hair',
    example: 'Her long auburn hair shone in the sunlight.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'impish',
    definition: 'Mischievous or playful, especially in a cheeky way',
    example: 'The child had an impish grin that suggested he was up to no good.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'angelic',
    definition: 'Like an angel, especially in looks or behavior; divine or heavenly',
    example: 'The choir\'s angelic voices filled the cathedral.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'outmoded',
    definition: 'No longer fashionable or current; out of date',
    example: 'His views on technology were considered outmoded by the younger generation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vogue',
    definition: 'The prevailing fashion or style at a particular time',
    example: 'Shoulder pads were in vogue during the 1980s.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pungent',
    definition: 'Having a sharply strong taste or smell',
    example: 'The pungent aroma of garlic filled the kitchen.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'backlash',
    definition: 'A strong adverse reaction to an event, proposal, or situation',
    example: 'The company faced a public backlash after the controversial advertisement.',
    partOfSpeech: 'noun'
  },
  {
    word: 'earnest',
    definition: 'Resulting from or showing sincere and intense conviction',
    example: 'She made an earnest plea for help in finding her lost dog.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'span',
    definition: 'The full extent of something from end to end; or to extend across',
    example: 'His career spanned more than forty years in the industry.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'detriment',
    definition: 'The state of being harmed or damaged; something that causes harm',
    example: 'Excessive screen time can be a detriment to children\'s social development.',
    partOfSpeech: 'noun'
  },
  {
    word: 'prowess',
    definition: 'Skill or expertise in a particular activity or field',
    example: 'She demonstrated her athletic prowess by winning three gold medals.',
    partOfSpeech: 'noun'
  },
  {
    word: 'burden',
    definition: 'A load, typically a heavy one; or a duty or responsibility that causes worry',
    example: 'Caring for her elderly parents became a burden as her own health declined.',
    partOfSpeech: 'noun'
  },
  {
    word: 'beast of burden',
    definition: 'An animal used for carrying heavy loads or pulling heavy equipment',
    example: 'Oxen have been used as beasts of burden in farming for centuries.',
    partOfSpeech: 'noun phrase'
  },
  {
    word: 'debilitate',
    definition: 'To make someone weak or infirm',
    example: 'The illness debilitated him so much that he couldn\'t return to work for months.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fortify',
    definition: 'To strengthen or invigorate; to provide with defensive works',
    example: 'The castle was fortified with high walls and a moat.',
    partOfSpeech: 'verb'
  },
  {
    word: 'eradicate',
    definition: 'To destroy completely; eliminate or get rid of',
    example: 'The goal of the campaign was to eradicate the disease worldwide.',
    partOfSpeech: 'verb'
  },
  {
    word: 'revamp',
    definition: 'To give new and improved form, structure, or appearance to',
    example: 'The website was revamped to make it more user-friendly.',
    partOfSpeech: 'verb'
  },
  {
    word: 'endearing',
    definition: 'Inspiring love or affection',
    example: 'The child\'s endearing smile made everyone in the room happy.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'enduring',
    definition: 'Lasting over a period of time; durable',
    example: 'Their enduring friendship has survived many challenges over the years.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'invasive',
    definition: 'Tending to spread very quickly and undesirably or harmfully',
    example: 'The invasive plant species quickly took over the garden.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'repugnant',
    definition: 'Extremely distasteful; unacceptable',
    example: 'She found his views on equality repugnant and refused to engage in conversation with him.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'courteous',
    definition: 'Polite, respectful, or considerate in manner',
    example: 'The staff at the hotel were courteous and helpful throughout our stay.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'counterfeit',
    definition: 'Made in exact imitation of something valuable with the intention to deceive or defraud',
    example: 'The police confiscated counterfeit banknotes from the suspect.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'mediocre',
    definition: 'Of only moderate or low quality; not very good',
    example: 'The food at the restaurant was mediocre at best.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'illicit',
    definition: 'Forbidden by law, rules, or custom',
    example: 'The police cracked down on illicit drug trading in the area.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inception',
    definition: 'The beginning or establishment of something; the start',
    example: 'The company has grown significantly since its inception in 2005.',
    partOfSpeech: 'noun'
  },
  {
    word: 'benchmark',
    definition: 'A standard or point of reference against which things may be compared',
    example: 'The new computer\'s performance set a benchmark for the industry.',
    partOfSpeech: 'noun'
  },
  {
    word: 'endeavour',
    definition: 'To try hard to do or achieve something',
    example: 'She will endeavour to finish the project by the deadline.',
    partOfSpeech: 'verb'
  },
  {
    word: 'robust',
    definition: 'Strong and healthy; hardy; or forceful and vigorous',
    example: 'The company reported robust sales growth in the last quarter.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'valiant',
    definition: 'Possessing or showing courage or determination',
    example: 'Despite their valiant efforts, the team lost the championship game.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'wince',
    definition: 'To make a slight involuntary grimace or flinch because of pain or distress',
    example: 'He winced when the doctor touched his injured arm.',
    partOfSpeech: 'verb'
  },
  {
    word: 'deviant',
    definition: 'Departing from usual or accepted standards',
    example: 'His deviant behavior concerned his parents and teachers.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'reprobate',
    definition: 'An unprincipled person; a person rejected by God',
    example: 'The old reprobate spent most of his time drinking and gambling.',
    partOfSpeech: 'noun'
  },
  {
    word: 'trailblazer',
    definition: 'A person who makes a new track through wild country; a pioneer',
    example: 'She was a trailblazer in the field of computer science.',
    partOfSpeech: 'noun'
  },
  {
    word: 'domestic',
    definition: 'Relating to the running of a home; or existing within a particular country',
    example: 'The company focused on expanding its domestic market before going international.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'volatile',
    definition: 'Liable to change rapidly and unpredictably, especially for the worse',
    example: 'The stock market was volatile throughout the economic crisis.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'afflict',
    definition: 'To cause pain or suffering to; affect adversely',
    example: 'The disease afflicts thousands of people each year.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fret',
    definition: 'To be constantly or visibly anxious or worried',
    example: 'Try not to fret about things you cannot change.',
    partOfSpeech: 'verb'
  },
  {
    word: 'misled',
    definition: 'Led or guided wrongly; deceived',
    example: 'The advertisement misled consumers about the product\'s capabilities.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'afterglow',
    definition: 'The light or radiance remaining in the sky after the sun has set; or a pleasant effect following a successful or happy event',
    example: 'The sunset created a beautiful afterglow across the horizon.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pithead',
    definition: 'The top or entrance of a mine shaft',
    example: 'The miners gathered at the pithead before descending into the coal mine.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tepid',
    definition: 'Lukewarm; or showing little enthusiasm',
    example: 'The audience\'s tepid applause suggested they were not impressed by the performance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ludicrous',
    definition: 'So foolish, unreasonable, or out of place as to be amusing',
    example: 'His explanation for being late was completely ludicrous.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'droll',
    definition: 'Curious or unusual in a way that provokes dry amusement',
    example: 'The comedian was known for his droll observations about everyday life.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'trivial',
    definition: 'Of little value or importance',
    example: 'Don\'t waste time worrying about trivial matters.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'petty',
    definition: 'Of small importance; trivial; or characterized by an undue concern for trivial matters',
    example: 'They argued over petty issues instead of focusing on what really mattered.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'flimsy',
    definition: 'Insubstantial and easily damaged; weak or poor',
    example: 'The flimsy chair collapsed when he sat on it.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'medley',
    definition: 'A varied mixture of people or things; or a collection of songs or pieces of music',
    example: 'The choir performed a medley of holiday songs at the concert.',
    partOfSpeech: 'noun'
  },
  {
    word: 'excerpt',
    definition: 'A short extract from a film, broadcast, or piece of music or writing',
    example: 'The magazine published an excerpt from her upcoming novel.',
    partOfSpeech: 'noun'
  },
  {
    word: 'perceive',
    definition: 'To become aware or conscious of something; to come to realize or understand',
    example: 'From his tone, she perceived that he was upset about something.',
    partOfSpeech: 'verb'
  },
  {
    word: 'confine',
    definition: 'To keep or restrict someone or something within certain limits',
    example: 'The patient was confined to bed until his fever subsided.',
    partOfSpeech: 'verb'
  },
  {
    word: 'heron',
    definition: 'A long-legged wading bird with a long neck and often a long pointed bill',
    example: 'We spotted a graceful heron standing motionless at the edge of the pond.',
    partOfSpeech: 'noun'
  },
  {
    word: 'voracity',
    definition: 'Extreme eagerness or enthusiasm to consume or acquire something',
    example: 'He read books with great voracity, sometimes finishing several in a week.',
    partOfSpeech: 'noun'
  },
  {
    word: 'itch',
    definition: 'An uncomfortable sensation on the skin that causes a desire to scratch; or a restless desire',
    example: 'The mosquito bite gave him an itch that wouldn\'t go away.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'merely',
    definition: 'Just; only; and nothing more or better',
    example: 'She was merely trying to help when she offered advice.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'gosling',
    definition: 'A young goose',
    example: 'The mother goose led her goslings to the water.',
    partOfSpeech: 'noun'
  },
  {
    word: 'malady',
    definition: 'A disease or ailment; or a serious problem',
    example: 'The doctor couldn\'t identify the strange malady affecting his patient.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dictatorial',
    definition: 'Relating to or typical of a ruler with total power; or behaving in an overbearing way',
    example: 'The manager\'s dictatorial style made the employees feel unappreciated.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'grandiose',
    definition: 'Impressive and imposing in appearance or style, especially pretentiously so',
    example: 'He had grandiose plans to build a mansion on the hilltop.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'allay',
    definition: 'To diminish or put at rest; to relieve or alleviate',
    example: 'The teacher\'s kind words helped to allay the child\'s fears about the first day of school.',
    partOfSpeech: 'verb'
  },
  {
    word: 'abdicate',
    definition: 'To formally give up a position of power, especially that of a monarch',
    example: 'The king decided to abdicate the throne in favor of his son.',
    partOfSpeech: 'verb'
  },
  {
    word: 'cohort',
    definition: 'A group of people with a shared characteristic; or a supporter or companion',
    example: 'The study followed a cohort of students from kindergarten through high school.',
    partOfSpeech: 'noun'
  },
  {
    word: 'lament',
    definition: 'To express sorrow, regret, or unhappiness about something',
    example: 'The farmers lamented the lack of rain during the growing season.',
    partOfSpeech: 'verb'
  },
  {
    word: 'acme',
    definition: 'The highest point or stage; the peak',
    example: 'The artist reached the acme of his career when he won the prestigious award.',
    partOfSpeech: 'noun'
  },
  {
    word: 'runt',
    definition: 'The smallest animal in a litter, especially a pig',
    example: 'The runt of the litter was weaker than its siblings and needed special care.',
    partOfSpeech: 'noun'
  },
  {
    word: 'clement',
    definition: 'Mild or merciful in disposition; lenient; or (of weather) mild',
    example: 'The clement weather made it perfect for a day at the beach.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'assuage',
    definition: 'To make an unpleasant feeling less intense; to satisfy (hunger or thirst)',
    example: 'The cool drink helped to assuage his thirst after the long hike.',
    partOfSpeech: 'verb'
  },
  {
    word: 'exorcise',
    definition: 'To drive out an evil spirit; or to get rid of a troublesome feeling or memory',
    example: 'The ritual was supposed to exorcise the evil spirits from the house.',
    partOfSpeech: 'verb'
  },
  {
    word: 'aghast',
    definition: 'Filled with shock or horror',
    example: 'She was aghast when she saw the damage caused by the storm.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'auspicious',
    definition: 'Giving or being a sign of future success; favorable',
    example: 'The clear sky was an auspicious sign for the outdoor wedding.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'as rare as hen\'s teeth',
    definition: 'Extremely rare or difficult to find (since hens don\'t have teeth)',
    example: 'Original copies of that book are as rare as hen\'s teeth.',
    partOfSpeech: 'idiom'
  },
  {
    word: 'hypocrisy',
    definition: 'The practice of claiming to have moral standards or beliefs that one\'s actions do not conform to',
    example: 'The politician was accused of hypocrisy when he broke the very law he had promoted.',
    partOfSpeech: 'noun'
  },
  {
    word: 'studious',
    definition: 'Spending a lot of time studying or reading; diligent in one\'s studies',
    example: 'The studious girl always completed her homework before playing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'tor',
    definition: 'A hill or rocky peak, typically in the south of England',
    example: 'They climbed to the top of the tor to get a better view of the landscape.',
    partOfSpeech: 'noun'
  },
  {
    word: 'merit',
    definition: 'The quality of being particularly good or worthy; or to deserve or be worthy of',
    example: 'Her proposal had enough merit to warrant further discussion.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'tyrant',
    definition: 'A cruel and oppressive ruler; someone who exercises power in a harsh way',
    example: 'The tyrant ruled the kingdom with fear and brutality.',
    partOfSpeech: 'noun'
  },
  {
    word: 'aloof',
    definition: 'Not friendly or forthcoming; cool and distant',
    example: 'He remained aloof from the other guests at the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hasty',
    definition: 'Done with excessive speed or urgency; hurried',
    example: 'She made a hasty decision that she later regretted.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'biased',
    definition: 'Unfairly prejudiced for or against someone or something',
    example: 'The judge was accused of being biased in favor of the prosecution.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'gallant',
    definition: 'Brave, heroic, and chivalrous; or courteously attentive especially to women',
    example: 'The gallant knight rescued the princess from the tower.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'succinct',
    definition: 'Briefly and clearly expressed; concise',
    example: 'Her succinct explanation made the complex topic easy to understand.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prominent',
    definition: 'Important; famous; or projecting from something; sticking out',
    example: 'The mountain was a prominent feature in the landscape.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'relish',
    definition: 'Great enjoyment; or a condiment eaten with food to add flavor',
    example: 'He ate his hot dog with relish, both literally and figuratively.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'tentative',
    definition: 'Not certain or fixed; provisional; done without confidence',
    example: 'They made tentative plans to meet, depending on the weather.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ornate',
    definition: 'Elaborately or highly decorated; showy',
    example: 'The palace featured ornate ceilings with gold leaf and intricate carvings.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sandstone',
    definition: 'A sedimentary rock consisting of sand grains that have been cemented together',
    example: 'The ancient buildings were constructed from local sandstone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'brambles',
    definition: 'Prickly, scrambling shrubs, typically of the blackberry family',
    example: 'Her arms were scratched from pushing through the brambles to reach the berries.',
    partOfSpeech: 'noun'
  },
  {
    word: 'amassed',
    definition: 'Gathered together or accumulated in a large amount or number',
    example: 'Over the years, he amassed a valuable collection of rare stamps.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'assertive',
    definition: 'Having or showing a confident and forceful personality',
    example: 'She was assertive during the meeting, making sure her ideas were heard.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'numeral',
    definition: 'A number written in words',
    example: 'The numeral "seven" is written as "7" in its numeric form.',
    partOfSpeech: 'noun'
  },
  {
    word: 'quaff',
    definition: 'To drink (especially alcohol) heartily',
    example: 'The vikings would quaff their mead from large drinking horns.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hearty',
    definition: 'Large and substantial in quantity; providing abundant nourishment',
    example: 'After the long hike, they enjoyed a hearty meal by the campfire.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'writhe',
    definition: 'To squirm or twist in pain',
    example: 'The injured player writhed on the ground after the tackle.',
    partOfSpeech: 'verb'
  },
  {
    word: 'wield',
    definition: 'To hold and use a weapon or tool',
    example: 'The knight wielded his sword against the dragon.',
    partOfSpeech: 'verb'
  },
  {
    word: 'heave',
    definition: 'To sigh deeply; or to lift with great effort',
    example: 'He heaved a sigh of relief when the test was over.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mope',
    definition: 'To feel dejected or apathetic',
    example: 'Instead of moping about losing the game, he decided to practice harder.',
    partOfSpeech: 'verb'
  },
  {
    word: 'wade',
    definition: 'To walk through shallow water',
    example: 'We had to wade across the stream to reach the other side.',
    partOfSpeech: 'verb'
  },
  {
    word: 'confiscate',
    definition: 'To take away someone\'s belongings, especially as a punishment',
    example: 'The teacher had to confiscate the phone when the student used it during class.',
    partOfSpeech: 'verb'
  },
  {
    word: 'preen',
    definition: 'To clean or tidy oneself, especially of a bird\'s feathers with its beak',
    example: 'The bird sat on the branch, preening its feathers in the morning sun.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hoist',
    definition: 'To lift or raise up',
    example: 'The sailors hoisted the flag up the mast.',
    partOfSpeech: 'verb'
  },
  {
    word: 'confine',
    definition: 'To keep someone imprisoned or restricted',
    example: 'He was confined to his room until he finished his homework.',
    partOfSpeech: 'verb'
  },
  {
    word: 'calligraphy',
    definition: 'A visual art related to writing beautifully',
    example: 'She practiced calligraphy to create elaborate wedding invitations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'pendant',
    definition: 'A piece of jewelry that hangs from a chain around the neck',
    example: 'She wore a heart-shaped pendant on a silver chain.',
    partOfSpeech: 'noun'
  },
  {
    word: 'concertina',
    definition: 'A musical instrument similar to an accordion',
    example: 'The folk musician played the concertina while singing traditional songs.',
    partOfSpeech: 'noun'
  },
  {
    word: 'archery',
    definition: 'The sport or skill of shooting with a bow and arrows',
    example: 'She won a gold medal in archery at the Olympics.',
    partOfSpeech: 'noun'
  },
  {
    word: 'scrutinise',
    definition: 'To examine carefully and in detail',
    example: 'The detective scrutinised the evidence for any clues.',
    partOfSpeech: 'verb'
  },
  {
    word: 'sport',
    definition: 'To wear something (usually with pride or to show off)',
    example: 'He was sporting a new hat at the party.',
    partOfSpeech: 'verb'
  },
  {
    word: 'don',
    definition: 'To put on an item of clothing',
    example: 'She donned her coat before going outside.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tuxedo',
    definition: 'A formal suit worn for formal occasions',
    example: 'He wore a black tuxedo to the wedding.',
    partOfSpeech: 'noun'
  },
  {
    word: 'monk',
    definition: 'A member of a religious community of men living under vows',
    example: 'The monk spent hours each day in silent meditation.',
    partOfSpeech: 'noun'
  },
  {
    word: 'maggot',
    definition: 'The larva of a fly, often found in decaying matter',
    example: 'The maggots helped decompose the fallen tree.',
    partOfSpeech: 'noun'
  },
  {
    word: 'oblige',
    definition: 'To do as someone asks or desires',
    example: 'He felt obliged to help his neighbor move furniture.',
    partOfSpeech: 'verb'
  },
  {
    word: 'displeased',
    definition: 'Feeling unhappy or annoyed',
    example: 'The teacher was displeased with the noisy classroom.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'avid',
    definition: 'Having or showing great enthusiasm for something',
    example: 'She\'s an avid reader who finishes several books each week.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'trinket',
    definition: 'A small ornament or item of jewelry that is of little value',
    example: 'She collected trinkets from every country she visited.',
    partOfSpeech: 'noun'
  },
  {
    word: 'perpetrator',
    definition: 'A person who carries out a harmful, illegal, or immoral act',
    example: 'The police are still searching for the perpetrator of the crime.',
    partOfSpeech: 'noun'
  },
  {
    word: 'coarse',
    definition: 'Having a rough texture or surface',
    example: 'The coarse fabric scratched against his skin.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sole',
    definition: 'The bottom part of a shoe or foot; or a type of flat fish',
    example: 'He needed new shoes because the soles were worn through.',
    partOfSpeech: 'noun'
  },
  {
    word: 'altar',
    definition: 'A table or raised structure in a church used in worship',
    example: 'The bride and groom stood before the altar to exchange their vows.',
    partOfSpeech: 'noun'
  },
  {
    word: 'alter',
    definition: 'To change or make different',
    example: 'They had to alter their plans because of the bad weather.',
    partOfSpeech: 'verb'
  },
  {
    word: 'mourn',
    definition: 'To feel or express great sadness, especially because of someone\'s death',
    example: 'The nation mourned when the beloved leader died.',
    partOfSpeech: 'verb'
  },
  {
    word: 'desert',
    definition: 'To abandon or leave, especially the military without permission; or a dry, barren area',
    example: 'It\'s considered a serious crime to desert the army during wartime.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'dessert',
    definition: 'A sweet course eaten at the end of a meal',
    example: 'They had ice cream for dessert after dinner.',
    partOfSpeech: 'noun'
  },
  {
    word: 'flop',
    definition: 'To fail completely; or to fall or sit down heavily',
    example: 'Despite the massive budget, the movie was a flop at the box office.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'winsome',
    definition: 'Attractive or appealing in a fresh, innocent way',
    example: 'The child\'s winsome smile charmed everyone in the room.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'eschew',
    definition: 'To deliberately avoid or keep away from something',
    example: 'He eschewed modern technology, preferring simpler ways of life.',
    partOfSpeech: 'verb'
  },
  {
    word: 'abstain',
    definition: 'To restrain oneself from doing or enjoying something',
    example: 'She decided to abstain from eating chocolate during the month.',
    partOfSpeech: 'verb'
  },
  {
    word: 'fixated',
    definition: 'Having one\'s eyes or attention firmly directed toward something',
    example: 'The cat was fixated on the bird outside the window.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'intrepid',
    definition: 'Fearless; adventurous',
    example: 'The intrepid explorer ventured into unknown territories.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sagacity',
    definition: 'Wisdom; good judgment',
    example: 'The elder was known for his sagacity in resolving village disputes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'proscribe',
    definition: 'To forbid or prohibit',
    example: 'The new law proscribed smoking in all public places.',
    partOfSpeech: 'verb'
  },
  {
    word: 'burnished',
    definition: 'Polished and made shiny',
    example: 'The burnished brass doorknob gleamed in the sunlight.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'alacrity',
    definition: 'Eager willingness or readiness',
    example: 'She accepted the challenge with alacrity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'reluctant',
    definition: 'Unwilling to do something',
    example: 'He was reluctant to speak in front of a large audience.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fractious',
    definition: 'Irritable and quarrelsome; difficult to control',
    example: 'The children became fractious after a long day of travel.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inquisitive',
    definition: 'Curious; eager to learn or know',
    example: 'The inquisitive child asked countless questions about how things worked.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'credulity',
    definition: 'A tendency to be too easily convinced or to believe unlikely claims',
    example: 'The con artist took advantage of the elderly man\'s credulity.',
    partOfSpeech: 'noun'
  },
  {
    word: 'loathe',
    definition: 'To hate or feel intense dislike for',
    example: 'She loathed having to wake up early in the morning.',
    partOfSpeech: 'verb'
  },
  {
    word: 'obsessive',
    definition: 'Thinking about something constantly in a way that is not normal',
    example: 'His obsessive attention to detail made him an excellent editor.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'preoccupy',
    definition: 'To dominate or engross the mind; to cause someone to give all their attention to something',
    example: 'Work concerns preoccupied her thoughts throughout the weekend.',
    partOfSpeech: 'verb'
  },
  {
    word: 'engross',
    definition: 'To absorb all the attention or interest of',
    example: 'The book was so fascinating that it engrossed her for hours.',
    partOfSpeech: 'verb'
  },
  {
    word: 'dauntless',
    definition: 'Fearless; determined',
    example: 'The dauntless firefighter ran into the burning building to save the child.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'resolute',
    definition: 'Admirably purposeful, determined, and unwavering',
    example: 'She was resolute in her decision to climb the mountain despite the difficulties.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'interrelating',
    definition: 'Connected or having a mutual relationship',
    example: 'Climate change involves many interrelating factors that affect each other.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'disinclined',
    definition: 'Unwilling or reluctant to do something',
    example: 'After a long day at work, he was disinclined to go out for dinner.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'averse',
    definition: 'Having a strong dislike of or opposition to something',
    example: 'She is not averse to taking risks when necessary.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'repugnant',
    definition: 'Extremely distasteful; unacceptable',
    example: 'The idea of animal cruelty is repugnant to most people.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'antipathy',
    definition: 'A deep-seated feeling of dislike or aversion',
    example: 'There was a mutual antipathy between the two colleagues.',
    partOfSpeech: 'noun'
  },
  {
    word: 'strenuous',
    definition: 'Requiring or using great exertion or effort',
    example: 'The hike was strenuous but rewarding once they reached the summit.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vigorous',
    definition: 'Strong, energetic, and active',
    example: 'Regular vigorous exercise is important for maintaining good health.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'possess',
    definition: 'To have or own something',
    example: 'She possesses remarkable talent as a musician.',
    partOfSpeech: 'verb'
  },
  {
    word: 'effulgent',
    definition: 'Shining brightly; radiant',
    example: 'The effulgent sun broke through the morning clouds.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'effrontery',
    definition: 'Insolent or impertinent behavior; rudeness',
    example: 'He had the effrontery to suggest that I was lying.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wretched',
    definition: 'Very unhappy, unfortunate, or in poor condition',
    example: 'The refugees lived in wretched conditions in the camp.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vague',
    definition: 'Not clearly expressed, perceived, or understood; unclear',
    example: 'His explanation was so vague that no one understood what to do.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ambiguous',
    definition: 'Open to more than one interpretation; unclear or inexact',
    example: 'Her answer was ambiguous, so we weren\'t sure if she agreed or not.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'rogue',
    definition: 'A dishonest or unprincipled person',
    example: 'The rogue trader lost millions of dollars for the company.',
    partOfSpeech: 'noun'
  },
  {
    word: 'intricate',
    definition: 'Very complicated or detailed',
    example: 'The watch had an intricate mechanism with many tiny gears.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'complex',
    definition: 'Consisting of many different and connected parts; complicated',
    example: 'The problem was more complex than it initially appeared.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'benign',
    definition: 'Gentle and kind; not harmful',
    example: 'The tumor was benign and not a cause for serious concern.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ample',
    definition: 'Enough or more than enough; plentiful',
    example: 'There was ample food for everyone at the party.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'copious',
    definition: 'Abundant in supply or quantity',
    example: 'She took copious notes during the lecture.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'abundant',
    definition: 'Existing or available in large quantities; plentiful',
    example: 'The forest was abundant with wildlife.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'anguish',
    definition: 'Severe mental or physical pain or suffering',
    example: 'She felt anguish after learning about the accident.',
    partOfSpeech: 'noun'
  },
  {
    word: 'radiant',
    definition: 'Sending out light; shining or glowing brightly',
    example: 'The bride looked radiant on her wedding day.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'exasperation',
    definition: 'A feeling of intense irritation or annoyance',
    example: 'He sighed in exasperation when the computer crashed again.',
    partOfSpeech: 'noun'
  },
  {
    word: 'distress',
    definition: 'Extreme anxiety, sorrow, or pain',
    example: 'The news of the accident caused great distress to the family.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ecstatic',
    definition: 'Feeling or expressing overwhelming happiness or joyful excitement',
    example: 'The fans were ecstatic when their team won the championship.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'incoherent',
    definition: 'Not logical or organized; unclear or unintelligible',
    example: 'His explanation was so incoherent that no one could follow it.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'emit',
    definition: 'To produce or discharge something',
    example: 'The factory emits harmful gases into the atmosphere.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tolerance',
    definition: 'The ability or willingness to accept opinions or behavior different from one\'s own',
    example: 'Religious tolerance is an important value in diverse societies.',
    partOfSpeech: 'noun'
  },
  {
    word: 'adolescent',
    definition: 'A young person in the process of developing from a child into an adult; a teenager',
    example: 'Adolescents often experience rapid physical and emotional changes.',
    partOfSpeech: 'noun/adjective'
  },
  {
    word: 'defendant',
    definition: 'A person accused of a crime in a court of law',
    example: 'The defendant pleaded not guilty to all charges.',
    partOfSpeech: 'noun'
  },
  {
    word: 'purvey',
    definition: 'To supply or provide (especially food or provisions)',
    example: 'The shop purveyed fine wines and exotic cheeses.',
    partOfSpeech: 'verb'
  },
  {
    word: 'amenities',
    definition: 'Features that provide comfort, convenience, or pleasure',
    example: 'The hotel offers many amenities including a pool and fitness center.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'conventional',
    definition: 'Based on or in accordance with what is generally done or believed',
    example: 'She chose a conventional approach rather than trying something experimental.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prudence',
    definition: 'The quality of being careful and using good judgment',
    example: 'Financial prudence is important when planning for retirement.',
    partOfSpeech: 'noun'
  },
  {
    word: 'prevision',
    definition: 'Foresight; knowing in advance',
    example: 'His prevision of market trends made him successful in business.',
    partOfSpeech: 'noun'
  },
  {
    word: 'implant',
    definition: 'Something artificially placed in the body, such as a medical device',
    example: 'The dental implant replaced his missing tooth.',
    partOfSpeech: 'noun'
  },
  {
    word: 'recondite',
    definition: 'Little known; obscure; difficult to understand',
    example: 'The professor specialized in recondite aspects of ancient philosophy.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'tendency',
    definition: 'An inclination toward a particular characteristic or type of behavior',
    example: 'She has a tendency to overthink simple problems.',
    partOfSpeech: 'noun'
  },
  {
    word: 'tenacity',
    definition: 'The quality of being determined or persistent',
    example: 'His tenacity helped him overcome numerous obstacles.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inclination',
    definition: 'A preference or tendency; a person\'s natural tendency to behave in a particular way',
    example: 'She had no inclination to study medicine despite her parents\' wishes.',
    partOfSpeech: 'noun'
  },
  {
    word: 'laborious',
    definition: 'Requiring considerable time and effort',
    example: 'Translating the ancient text was a laborious process.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'contrived',
    definition: 'Created or arranged in a way that is artificial and not spontaneous',
    example: 'The plot twist seemed contrived and unconvincing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'expend',
    definition: 'To use up a resource such as time, money, or energy',
    example: 'Don\'t expend all your energy in the first hour of the race.',
    partOfSpeech: 'verb'
  },
  {
    word: 'foresight',
    definition: 'The ability to predict future events or needs',
    example: 'He had the foresight to invest in technology companies before they became popular.',
    partOfSpeech: 'noun'
  },
  {
    word: 'marvel',
    definition: 'To be filled with wonder or astonishment',
    example: 'Visitors marvel at the beauty of the ancient temple.',
    partOfSpeech: 'verb'
  },
  {
    word: 'onslaught',
    definition: 'A fierce or destructive attack',
    example: 'The fortress withstood the onslaught of the enemy army.',
    partOfSpeech: 'noun'
  },
  {
    word: 'meek',
    definition: 'Quiet, gentle, and submissive',
    example: 'The meek student rarely spoke up in class discussions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'peculiar',
    definition: 'Strange or unusual; different from what is normal or expected',
    example: 'The house had a peculiar smell that they couldn\'t identify.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'oversight',
    definition: 'An omission or error made by accident; or supervision',
    example: 'Due to an oversight, she wasn\'t invited to the meeting.',
    partOfSpeech: 'noun'
  },
  {
    word: 'goodwill',
    definition: 'Friendly, helpful, or cooperative feelings or attitude',
    example: 'The company has built up a lot of goodwill in the community.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conspiracy',
    definition: 'A secret plan by a group to do something harmful or illegal',
    example: 'The government uncovered a conspiracy to overthrow the president.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conspire',
    definition: 'To make secret plans to do something harmful or illegal',
    example: 'The group conspired to steal valuable artwork from the museum.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hostile',
    definition: 'Unfriendly and antagonistic; opposed',
    example: 'The proposal received a hostile reception from local residents.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'hectic',
    definition: 'Full of busy activity; busy and frantic',
    example: 'She had a hectic schedule with meetings all day.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'serene',
    definition: 'Calm, peaceful, and untroubled',
    example: 'The lake was perfectly serene in the early morning light.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'liberal',
    definition: 'Open to new behavior or opinions; willing to respect or accept different views',
    example: 'Her parents had liberal views on education and encouraged free thinking.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'benevolent',
    definition: 'Kind, helpful, and generous',
    example: 'The benevolent organization provided food and shelter for the homeless.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'indolence',
    definition: 'Laziness; avoidance of activity',
    example: 'His indolence prevented him from achieving his potential.',
    partOfSpeech: 'noun'
  },
  {
    word: 'indifferent',
    definition: 'Having no particular interest or concern; not caring',
    example: 'She was indifferent to his complaints and continued with her plans.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pledge',
    definition: 'To make a solemn promise or undertaking',
    example: 'He pledged to donate half his fortune to charity.',
    partOfSpeech: 'verb'
  },
  {
    word: 'matted',
    definition: 'Tangled into a thick mass',
    example: 'The dog\'s fur was matted after wandering in the woods.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pristine',
    definition: 'In perfect condition; clean and fresh as if new',
    example: 'The beach was in pristine condition without any litter.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'plausible',
    definition: 'Seeming reasonable or probable; believable',
    example: 'His explanation was plausible but later proved to be false.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'acerbic',
    definition: 'Sharp and forthright; harsh or severe, often in a sarcastic way',
    example: 'The critic was known for his acerbic reviews of new restaurants.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sarcastic',
    definition: 'Using irony to mock or convey contempt',
    example: 'Her sarcastic comment about his cooking didn\'t amuse him.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fatuous',
    definition: 'Silly and pointless; foolish',
    example: 'He made a fatuous remark that everyone ignored.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'prognosticate',
    definition: 'To predict or forecast future events',
    example: 'The meteorologist attempted to prognosticate the path of the hurricane.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prognosis',
    definition: 'A forecast of the likely outcome of a situation',
    example: 'The doctor gave a positive prognosis for a full recovery.',
    partOfSpeech: 'noun'
  },
  {
    word: 'rodent',
    definition: 'A small mammal such as a mouse, rat, squirrel, or beaver',
    example: 'The cat caught a rodent that had been living in the garage.',
    partOfSpeech: 'noun'
  },
  {
    word: 'mediocre',
    definition: 'Of only moderate or low quality; not very good',
    example: 'Her performance was mediocre compared to her previous work.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vacant',
    definition: 'Not occupied or in use; empty',
    example: 'We were lucky to find a vacant parking space in the busy lot.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'consultant',
    definition: 'A person who provides expert advice professionally',
    example: 'They hired a marketing consultant to help improve their brand image.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bliss',
    definition: 'Perfect happiness; great joy',
    example: 'Their honeymoon in Hawaii was pure bliss.',
    partOfSpeech: 'noun'
  },
  {
    word: 'uppity',
    definition: 'Self-important; arrogant',
    example: 'Some thought she had become uppity after her promotion.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'arrogant',
    definition: 'Having or revealing an exaggerated sense of one\'s own importance',
    example: 'His arrogant attitude made it difficult for others to work with him.',
    partOfSpeech: 'adjective'
  },
{
    word: 'condescending',
    definition: 'Showing an attitude of superiority; patronizing',
    example: 'She disliked his condescending tone when he explained simple concepts to her.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'superiority',
    definition: 'The state or quality of being better, greater, or more important than others',
    example: 'The team\'s superiority was evident throughout the tournament.',
    partOfSpeech: 'noun'
  },
  {
    word: 'enervating',
    definition: 'Causing one to feel drained of energy or vitality',
    example: 'The hot, humid weather was enervating, making it difficult to concentrate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ruthless',
    definition: 'Without pity or compassion; merciless or cruel',
    example: 'The ruthless dictator imprisoned anyone who opposed him.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'mercy',
    definition: 'Compassionate or kindly forbearance shown toward an offender or enemy; forgiveness',
    example: 'He showed mercy by pardoning his opponent\'s debt.',
    partOfSpeech: 'noun'
  },
  {
    word: 'prosperous',
    definition: 'Successful and wealthy; thriving financially',
    example: 'The town became more prosperous after the new factory opened.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'atrocious',
    definition: 'Horrifyingly wicked or cruel; of very poor quality',
    example: 'The conditions in the prison were atrocious and violated human rights standards.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fictitious',
    definition: 'Not real or true; imaginary or fabricated',
    example: 'The novel is set in a fictitious town based on the author\'s hometown.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'controversial',
    definition: 'Causing or likely to cause disagreement or discussion',
    example: 'The politician\'s speech on tax reform was highly controversial.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'disputable',
    definition: 'Open to question; debatable or contestable',
    example: 'His claim to be the rightful owner is disputable since he has no documentation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'province',
    definition: 'A principal administrative division of a country or empire',
    example: 'Quebec is the largest province in Canada.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dimension',
    definition: 'A measurable extent such as length, breadth, or height',
    example: 'The room\'s dimensions were too small for the new furniture.',
    partOfSpeech: 'noun'
  },
  {
    word: 'justify',
    definition: 'To show or prove to be right or reasonable',
    example: 'It\'s hard to justify spending so much money on luxury items.',
    partOfSpeech: 'verb'
  },
  {
    word: 'distinguish',
    definition: 'To recognize or treat as different; to tell apart',
    example: 'It can be difficult to distinguish between the identical twins.',
    partOfSpeech: 'verb'
  },
  {
    word: 'malice',
    definition: 'The intention or desire to do evil; ill will',
    example: 'The prank was done without malice, but it still hurt her feelings.',
    partOfSpeech: 'noun'
  },
  {
    word: 'petty',
    definition: 'Of little importance; trivial',
    example: 'They argued over petty issues rather than addressing the real problems.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'discreetly',
    definition: 'In a careful and prudent manner, especially to keep something secret',
    example: 'He discreetly handed the envelope to the manager without anyone noticing.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'redundant',
    definition: 'Not or no longer needed or useful; superfluous',
    example: 'With the new system in place, the old method became redundant.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ravenous',
    definition: 'Extremely hungry; voracious',
    example: 'After the long hike, the children were ravenous for dinner.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'barren',
    definition: 'Too poor to produce much or any vegetation; infertile',
    example: 'Nothing could grow in the barren desert landscape.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'iridescent',
    definition: 'Showing luminous colors that seem to change when seen from different angles',
    example: 'The peacock\'s feathers were beautifully iridescent in the sunlight.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'luminous',
    definition: 'Giving off light; bright or shining',
    example: 'The luminous dial of the watch glowed in the dark.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'siege',
    definition: 'A military operation in which enemy forces surround a town or building, cutting off essential supplies',
    example: 'The castle withstood a siege that lasted for three months.',
    partOfSpeech: 'noun'
  },
  {
    word: 'zealous',
    definition: 'Having or showing great energy or enthusiasm in pursuit of a cause or objective',
    example: 'The zealous volunteer worked tirelessly to help those in need.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'perceive',
    definition: 'To become aware or conscious of something; to come to realize or understand',
    example: 'From his expression, she could perceive that something was wrong.',
    partOfSpeech: 'verb'
  },
  {
    word: 'pertaining',
    definition: 'Relating to or concerning something',
    example: 'The lawyer asked questions pertaining to the accident.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'federal',
    definition: 'Having or relating to a system of government in which several states form a unity but remain independent in internal affairs',
    example: 'Federal laws apply to all states in the country.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'potential',
    definition: 'Having or showing the capacity to become or develop into something in the future',
    example: 'The young musician has great potential to become a star.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'substantial',
    definition: 'Of considerable importance, size, or worth',
    example: 'The charity received a substantial donation that will fund their work for years.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'essential',
    definition: 'Absolutely necessary; extremely important',
    example: 'Water is essential for human survival.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'audacity',
    definition: 'Boldness or daring, especially with confident disregard for personal safety or conventional thought',
    example: 'She had the audacity to question the CEO\'s decision in front of everyone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'superstition',
    definition: 'A widely held but irrational belief in supernatural influences',
    example: 'It\'s a common superstition that breaking a mirror brings seven years of bad luck.',
    partOfSpeech: 'noun'
  },
  {
    word: 'conceal',
    definition: 'To hide or keep from observation',
    example: 'He tried to conceal his disappointment when he didn\'t get the job.',
    partOfSpeech: 'verb'
  },
  {
    word: 'devious',
    definition: 'Showing a skillful use of underhanded tactics to achieve goals',
    example: 'The devious plot to steal the valuable painting was uncovered by police.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'equestrian',
    definition: 'Relating to horse riding or riders',
    example: 'She won several medals in equestrian events at the Olympics.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inexplicably',
    definition: 'In a way that cannot be explained or accounted for',
    example: 'He inexplicably failed to show up for the important meeting.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'anecdote',
    definition: 'A short amusing or interesting story about a real incident or person',
    example: 'My grandfather likes to tell anecdotes about his childhood during the war.',
    partOfSpeech: 'noun'
  },
  {
    word: 'imponderable',
    definition: 'A factor that is difficult or impossible to estimate or assess',
    example: 'The weather is an imponderable that could affect the outdoor event.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ponder',
    definition: 'To think about something carefully, especially before making a decision',
    example: 'She sat by the window, pondering what to do next.',
    partOfSpeech: 'verb'
  },
  {
    word: 'endure',
    definition: 'To suffer something difficult, unpleasant, or painful; to last over a period of time',
    example: 'The ancient monument has endured for over a thousand years.',
    partOfSpeech: 'verb'
  },
  {
    word: 'intriguing',
    definition: 'Arousing one\'s curiosity or interest; fascinating',
    example: 'The detective found an intriguing clue at the crime scene.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'juvenile',
    definition: 'Of, for, or relating to young people; or immature or childish',
    example: 'The court handles juvenile offenders differently from adults.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'excess',
    definition: 'An amount of something that is more than necessary, permitted, or desirable',
    example: 'Any excess profit will be reinvested in the business.',
    partOfSpeech: 'noun'
  },
  {
    word: 'excessively',
    definition: 'To a greater degree than is necessary or reasonable',
    example: 'The room was excessively hot, making it uncomfortable to stay inside.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'erect',
    definition: 'Rigidly upright or straight; or to build or construct',
    example: 'They plan to erect a monument in the town square to honor local veterans.',
    partOfSpeech: 'adjective/verb'
  },
  {
    word: 'chivalrous',
    definition: 'Courteous and gallant, especially toward women',
    example: 'His chivalrous behavior included opening doors and offering his jacket when she was cold.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'distraught',
    definition: 'Deeply upset and agitated',
    example: 'The mother was distraught when her child went missing.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'slop',
    definition: 'Spill or flow over the edge of a container; or liquid food for animals',
    example: 'Be careful not to slop the water out of the bucket as you carry it.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'lope',
    definition: 'Run or move with a long, bounding stride',
    example: 'The wolf loped across the open field toward the forest.',
    partOfSpeech: 'verb'
  },
  {
    word: 'spore',
    definition: 'A reproductive cell capable of developing into a new individual without fusion with another cell',
    example: 'Mushrooms reproduce by releasing millions of spores into the air.',
    partOfSpeech: 'noun'
  },
  {
    word: 'valet',
    definition: 'A personal male attendant responsible for the clothes and appearance of a gentleman',
    example: 'The hotel offers valet parking for all guests.',
    partOfSpeech: 'noun'
  },
  {
    word: 'wallflower',
    definition: 'A person who is shy or excluded from a group at a social event',
    example: 'She was a wallflower at the dance, standing alone by the refreshment table.',
    partOfSpeech: 'noun'
  },
  {
    word: 'facet',
    definition: 'One side or aspect of something; or a flat surface on a gemstone',
    example: 'The diamond sparkled with its many facets catching the light.',
    partOfSpeech: 'noun'
  },
  {
    word: 'peruse',
    definition: 'To read or examine, typically with great care',
    example: 'She perused the contract before signing it to make sure she understood all the terms.',
    partOfSpeech: 'verb'
  },
  {
    word: 'glean',
    definition: 'To gather information or material bit by bit',
    example: 'The detective hoped to glean some clues from the witness statements.',
    partOfSpeech: 'verb'
  },
  {
    word: 'spurn',
    definition: 'To reject with disdain or contempt',
    example: 'She spurned his offer of help, preferring to solve the problem herself.',
    partOfSpeech: 'verb'
  },
  {
    word: 'maleficent',
    definition: 'Causing or capable of causing harm or evil',
    example: 'The maleficent witch cast a spell on the entire village.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'deity',
    definition: 'A god or goddess',
    example: 'Ancient Greeks worshipped many deities, each responsible for different aspects of life.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ravel',
    definition: 'To untangle or unravel something; or become tangled',
    example: 'The loose thread caused her sweater to ravel at the edge.',
    partOfSpeech: 'verb'
  },
  {
    word: 'timeshare',
    definition: 'A property owned jointly by several people who have the right to use it at different times of the year',
    example: 'They purchased a timeshare in Florida for winter vacations.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bast',
    definition: 'The strong, fibrous layer of tissue in plants, just inside the bark',
    example: 'The craftsman used bast fibers from the linden tree to weave baskets.',
    partOfSpeech: 'noun'
  },
  {
    word: 'mage',
    definition: 'A magician or learned person with supernatural powers',
    example: 'In the fantasy novel, the mage cast a powerful spell to protect the kingdom.',
    partOfSpeech: 'noun'
  },
  {
    word: 'irate',
    definition: 'Feeling or showing extreme anger',
    example: 'The irate customer demanded to speak to the manager about the poor service.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'rave',
    definition: 'To talk wildly or with great enthusiasm; or a lively party with dancing to electronic music',
    example: 'The critics raved about the new restaurant\'s innovative cuisine.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'flit',
    definition: 'Move swiftly and lightly',
    example: 'Butterflies flitted from flower to flower in the garden.',
    partOfSpeech: 'verb'
  },
  {
    word: 'relegate',
    definition: 'To assign to an inferior rank or position',
    example: 'After performing poorly, the team was relegated to a lower division.',
    partOfSpeech: 'verb'
  },
  {
    word: 'transpire',
    definition: 'To come to light or become known; or to happen or occur',
    example: 'It transpired that he had known about the problem for weeks but said nothing.',
    partOfSpeech: 'verb'
  },
  {
    word: 'gaggle',
    definition: 'A flock of geese; or a disorderly group of people',
    example: 'A gaggle of tourists blocked the entrance to the museum.',
    partOfSpeech: 'noun'
  },
  {
    word: 'dally',
    definition: 'To waste time or act slowly',
    example: 'We can\'t dally if we want to catch the early train.',
    partOfSpeech: 'verb'
  },
  {
    word: 'gape',
    definition: 'To stare with one\'s mouth open in amazement or wonder',
    example: 'The children gaped at the magician as he pulled a rabbit from his hat.',
    partOfSpeech: 'verb'
  },
  {
    word: 'perturb',
    definition: 'To make someone anxious or unsettled',
    example: 'The strange noise outside perturbed her enough to call the police.',
    partOfSpeech: 'verb'
  },
  {
    word: 'edition',
    definition: 'A particular form or version of a published text; or one set of copies published at a particular time',
    example: 'The first edition of the book is now a valuable collector\'s item.',
    partOfSpeech: 'noun'
  },
  {
    word: 'verge',
    definition: 'The edge or border of something; or to be close to or on the brink of something',
    example: 'The company was on the verge of bankruptcy when new investors saved it.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'lovesick',
    definition: 'Experiencing the intense feelings of love, especially when separated from the loved one',
    example: 'The lovesick teenager couldn\'t stop thinking about his crush.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'newlyweds',
    definition: 'People who have recently gotten married',
    example: 'The newlyweds moved into their first apartment together last week.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'bland',
    definition: 'Lacking strong features or characteristics and therefore uninteresting',
    example: 'The food was nutritious but bland, with little flavor or seasoning.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'drab',
    definition: 'Lacking brightness or interest; dull and monotonous',
    example: 'She painted the walls to brighten up the drab office space.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'insipid',
    definition: 'Lacking flavor or interest; bland',
    example: 'The critics described the film as insipid and forgettable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lusterless',
    definition: 'Lacking shine or brightness',
    example: 'Her hair became lusterless after too many chemical treatments.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lustrous',
    definition: 'Having luster; shining or gleaming',
    example: 'The silk fabric had a lustrous sheen in the light.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ward',
    definition: 'A person under the protection or in the custody of another; or a separate section of a hospital',
    example: 'As his legal guardian, she became the ward of her orphaned nephew.',
    partOfSpeech: 'noun'
  },
  {
    word: 'bile',
    definition: 'A bitter greenish-brown fluid produced by the liver and stored in the gallbladder; or bitter anger or irritability',
    example: 'His criticism was full of bile and resentment.',
    partOfSpeech: 'noun'
  },
  {
    word: 'delirium',
    definition: 'A disturbed state of mind characterized by restlessness, confusion, and sometimes hallucinations',
    example: 'The high fever caused him to fall into a state of delirium.',
    partOfSpeech: 'noun'
  },
  {
    word: 'reform',
    definition: 'To make changes in something in order to improve it; or a change made to something to improve it',
    example: 'The new law was part of a broader reform of the education system.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'thew',
    definition: 'A muscle or tendon; or physical strength',
    example: 'The ancient warrior was known for his mighty thews.',
    partOfSpeech: 'noun'
  },
  {
    word: 'idealist',
    definition: 'A person who is guided by ideals, especially high ideals',
    example: 'As an idealist, she believed that world peace was possible through cooperation.',
    partOfSpeech: 'noun'
  },
  {
    word: 'sot',
    definition: 'A habitual drunkard',
    example: 'The old sot spent most of his time at the village tavern.',
    partOfSpeech: 'noun'
  },
  {
    word: 'goad',
    definition: 'To provoke or annoy someone so as to stimulate an action or reaction',
    example: 'The older boys goaded him into climbing the dangerous cliff.',
    partOfSpeech: 'verb'
  },
  {
    word: 'debunk',
    definition: 'To expose the falseness or hollowness of a myth, idea, or belief',
    example: 'The scientist worked to debunk the popular misconceptions about vaccines.',
    partOfSpeech: 'verb'
  },
  {
    word: 'swerve',
    definition: 'To change or cause to change direction abruptly',
    example: 'The driver had to swerve to avoid hitting the dog that ran into the road.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hone',
    definition: 'To sharpen or refine a skill',
    example: 'She spent years honing her skills as a pianist.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tiara',
    definition: 'A jeweled, ornamental crown traditionally worn by women on formal occasions',
    example: 'The princess wore a diamond tiara for her wedding ceremony.',
    partOfSpeech: 'noun'
  },
  {
    word: 'aspire',
    definition: 'To direct one\'s hopes or ambitions toward achieving something',
    example: 'He aspired to become a doctor ever since he was a child.',
    partOfSpeech: 'verb'
  },
  {
    word: 'decree',
    definition: 'An official order issued by a legal authority',
    example: 'The king issued a decree that all citizens must pay a new tax.',
    partOfSpeech: 'noun'
  },
  {
    word: 'grail',
    definition: 'A thing that is being earnestly pursued or sought after',
    example: 'Finding a cure for cancer is the holy grail of many medical researchers.',
    partOfSpeech: 'noun'
  },
  {
    word: 'guise',
    definition: 'An external appearance or manner; or a pretense',
    example: 'He gained access to the building under the guise of being a maintenance worker.',
    partOfSpeech: 'noun'
  },
  {
    word: 'callous',
    definition: 'Showing or having an insensitive and cruel disregard for others',
    example: 'His callous remarks about the tragedy showed a complete lack of empathy.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'trendsetter',
    definition: 'A person who leads the way in fashion or ideas',
    example: 'The influential designer has been a trendsetter in the fashion industry for decades.',
    partOfSpeech: 'noun'
  },
  {
    word: 'standoff',
    definition: 'A deadlock between two equally matched opponents in a dispute or conflict',
    example: 'The police were involved in a tense standoff with the armed suspect.',
    partOfSpeech: 'noun'
  },
  {
    word: 'keyword',
    definition: 'A word that serves as a key to a code or formula; or a significant word used in indexing or searching',
    example: 'To find relevant information, enter keywords related to your topic in the search bar.',
    partOfSpeech: 'noun'
  },
  {
    word: 'manifest',
    definition: 'Clear or obvious to the eye or mind; or to show or demonstrate clearly',
    example: 'Her anger was manifest in her clenched fists and furrowed brow.',
    partOfSpeech: 'adjective/verb'
  },
  {
    word: 'quota',
    definition: 'A fixed minimum or maximum number that is officially allowed',
    example: 'The fishing company had reached its annual quota and couldn\'t catch any more fish.',
    partOfSpeech: 'noun'
  },
  {
    word: 'stigma',
    definition: 'A mark of disgrace associated with a particular circumstance, quality, or person',
    example: 'There\'s still a stigma attached to mental illness in many communities.',
    partOfSpeech: 'noun'
  },
  {
    word: 'ardent',
    definition: 'Very enthusiastic or passionate',
    example: 'He was an ardent supporter of environmental protection.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'scapegoat',
    definition: 'A person who is blamed for the wrongdoings or mistakes of others',
    example: 'The junior employee became the scapegoat for the department\'s failures.',
    partOfSpeech: 'noun'
  },
  {
    word: 'carat',
    definition: 'A unit of weight for precious stones and pearls, equivalent to 200 milligrams',
    example: 'She received a two-carat diamond engagement ring.',
    partOfSpeech: 'noun'
  },
  {
    word: 'karat',
    definition: 'A unit of measure for the fineness (purity) of gold',
    example: '24-karat gold is pure gold, while 14-karat gold contains less gold mixed with other metals.',
    partOfSpeech: 'noun'
  },
  {
    word: 'gland',
    definition: 'An organ in the body that produces substances needed by the body',
    example: 'The thyroid gland plays an important role in regulating metabolism.',
    partOfSpeech: 'noun'
  },
  {
    word: 'brainwash',
    definition: 'To make someone believe something by repeatedly telling them that it is true and preventing any other information from reaching them',
    example: 'The cult leader tried to brainwash his followers into giving up their possessions.',
    partOfSpeech: 'verb'
  },
  {
    word: 'cross section',
    definition: 'A section formed by cutting through something at right angles to its length; or a representative sample',
    example: 'The diagram showed a cross section of the human heart.',
    partOfSpeech: 'noun'
  },
  {
    word: 'sentimental',
    definition: 'Prompted by feelings of tenderness, sadness, or nostalgia',
    example: 'The old photograph had great sentimental value to her.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'upend',
    definition: 'To set or turn something on its end or upside down; or to affect drastically',
    example: 'The new technology could upend the entire industry.',
    partOfSpeech: 'verb'
  },
  {
    word: 'decumbent',
    definition: 'Lying down; reclining',
    example: 'The decumbent stems of the plant spread across the ground.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'recumbent',
    definition: 'Lying down; reclining',
    example: 'The patient was in a recumbent position on the examination table.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'recoil',
    definition: 'To suddenly move back because of fear, disgust, or pain; or the backward movement of a gun when fired',
    example: 'She recoiled in horror when she saw the spider.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'purge',
    definition: 'To rid someone or something of an unwanted quality, condition, or influence',
    example: 'The political leader purged his opponents from the party.',
    partOfSpeech: 'verb'
  },
  {
    word: 'elucidate',
    definition: 'To make something clear; to explain',
    example: 'The professor tried to elucidate the complex theory for the students.',
    partOfSpeech: 'verb'
  },
  {
    word: 'expunge',
    definition: 'To erase or remove completely',
    example: 'The court agreed to expunge the minor offense from his record.',
    partOfSpeech: 'verb'
  },
  {
    word: 'traverse',
    definition: 'To travel across or through',
    example: 'The explorers had to traverse the dense jungle to reach their destination.',
    partOfSpeech: 'verb'
  },
  {
    word: 'taciturn',
    definition: 'Reserved or uncommunicative in speech; saying little',
    example: 'Her taciturn grandfather rarely spoke more than a few words at family gatherings.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'relent',
    definition: 'To abandon or mitigate a harsh intention or cruel treatment',
    example: 'The teacher finally relented and gave the class an extension on the assignment.',
    partOfSpeech: 'verb'
  },
  {
    word: 'remit',
    definition: 'To send money as payment; or to cancel or refrain from exacting a debt or punishment',
    example: 'The court decided to remit part of his sentence due to good behavior.',
    partOfSpeech: 'verb'
  },
  {
    word: 'grandstand',
    definition: 'To perform showily to impress onlookers',
    example: 'The politician was accused of grandstanding rather than addressing the real issues.',
    partOfSpeech: 'verb'
  },
  {
    word: 'debtor',
    definition: 'A person who owes money',
    example: 'As a debtor, he was obligated to repay the loan with interest.',
    partOfSpeech: 'noun'
  },
  {
    word: 'lagoon',
    definition: 'A stretch of salt water separated from the sea by a low sandbank or coral reef',
    example: 'The tropical island was surrounded by a crystal-clear lagoon.',
    partOfSpeech: 'noun'
  },
  {
    word: 'partake',
    definition: 'To join in; to take part; to share',
    example: 'Everyone was invited to partake in the celebration dinner.',
    partOfSpeech: 'verb'
  },
  {
    word: 'superficial',
    definition: 'Existing or occurring at or on the surface; or appearing to be true or real only until examined more closely',
    example: 'Fortunately, his injuries were only superficial and didn\'t require medical attention.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'servile',
    definition: 'Having or showing an excessive willingness to serve or please others',
    example: 'His servile attitude toward his boss made his colleagues uncomfortable.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'curtail',
    definition: 'To reduce or restrict something',
    example: 'The company had to curtail spending during the economic downturn.',
    partOfSpeech: 'verb'
  },
  {
    word: 'interrogate',
    definition: 'To ask questions of someone closely, aggressively, or formally',
    example: 'The police interrogated the suspect for hours.',
    partOfSpeech: 'verb'
  },
  {
    word: 'probe',
    definition: 'To examine thoroughly and in depth; or a device used for this purpose',
    example: 'The journalist continued to probe into the politician\'s financial dealings.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'beseech',
    definition: 'To ask someone urgently and fervently to do something; to implore',
    example: 'She beseeched him to reconsider his decision to leave.',
    partOfSpeech: 'verb'
  },
  {
    word: 'invigorate',
    definition: 'To give energy or strength to',
    example: 'The cold shower helped invigorate him after the long, tiring day.',
    partOfSpeech: 'verb'
  },
  {
    word: 'strive',
    definition: 'To make great efforts to achieve or obtain something',
    example: 'He strived to improve his skills every day.',
    partOfSpeech: 'verb'
  },
  {
    word: 'pivot',
    definition: 'To turn or rotate; or the central point on which a mechanism turns or oscillates',
    example: 'The company decided to pivot its business model toward online services.',
    partOfSpeech: 'verb/noun'
  },
  {
    word: 'rescind',
    definition: 'To revoke, cancel, or repeal a law, order, or agreement',
    example: 'The board voted to rescind their previous decision after receiving new information.',
    partOfSpeech: 'verb'
  },
  {
    word: 'repeal',
    definition: 'To revoke or annul a law or act',
    example: 'The government decided to repeal the controversial tax law.',
    partOfSpeech: 'verb'
  },
  {
    word: 'predispose',
    definition: 'To make someone likely or inclined to behave in a particular way or to develop a particular condition',
    example: 'A family history of heart disease may predispose you to similar problems.',
    partOfSpeech: 'verb'
  },
  {
    word: 'prone',
    definition: 'Likely or liable to suffer from, do, or experience something, typically something negative or harmful',
    example: 'The area is prone to flooding during heavy rainfall.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'autonomy',
    definition: 'The right or condition of self-government; freedom from external control or influence',
    example: 'The region was granted autonomy but remained part of the country.',
    partOfSpeech: 'noun'
  },
  {
    word: 'inflict',
    definition: 'To cause (something unpleasant or painful) to be suffered by someone or something',
    example: 'The storm inflicted severe damage on coastal communities.',
    partOfSpeech: 'verb'
  },
  {
    word: 'circumspect',
    definition: 'Wary and unwilling to take risks; considering all possible consequences before acting',
    example: 'The lawyer was circumspect in his response to the reporter\'s questions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'undertow',
    definition: 'A current beneath the surface that sets seaward or along the beach when waves are breaking on the shore',
    example: 'Swimmers were warned about the dangerous undertow at the beach.',
    partOfSpeech: 'noun'
  },
  {
    word: 'eddy',
    definition: 'A circular movement of water, counter to a main current, causing a small whirlpool',
    example: 'Leaves swirled in the eddy formed by rocks in the stream.',
    partOfSpeech: 'noun'
  },
  {
    word: 'torrent',
    definition: 'A strong and fast-moving stream of water or other liquid',
    example: 'After the storm, the small creek became a raging torrent.',
    partOfSpeech: 'noun'
  },
  {
    word: 'topical',
    definition: 'Relating to a current and important subject; or applied to a particular part of the body',
    example: 'The comedian included topical references to recent news events in his performance.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'pummel',
    definition: 'To strike repeatedly with the fists',
    example: 'The boxer pummeled his opponent with a series of quick jabs.',
    partOfSpeech: 'verb'
  },
  {
    word: 'tarry',
    definition: 'To stay longer than intended; to delay leaving',
    example: 'They tarried at the restaurant, enjoying the conversation long after their meal was finished.',
    partOfSpeech: 'verb'
  },
  {
    word: 'terry',
    definition: 'A fabric with loops on both sides, used for towels and bathrobes',
    example: 'The hotel provided soft terry cloth bathrobes for guests.',
    partOfSpeech: 'noun'
  },
  {
    word: 'unperturbed',
    definition: 'Not troubled or worried by something',
    example: 'The experienced pilot remained unperturbed by the turbulence.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sanction',
    definition: 'Official permission or approval for an action; or a threatened penalty for disobeying a law or rule',
    example: 'The international community imposed economic sanctions on the country for violating human rights.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'misanthropic',
    definition: 'Disliking humankind and avoiding human society',
    example: 'The reclusive writer was known for his misanthropic views and lifestyle.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'degenerative',
    definition: 'Tending to decline or deteriorate progressively',
    example: 'Arthritis is a degenerative disease that affects the joints.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fruitful',
    definition: 'Producing good results; profitable or rewarding',
    example: 'Their collaboration proved to be fruitful, resulting in several innovative products.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fitful',
    definition: 'Occurring irregularly or spasmodically; not continuous',
    example: 'He had a fitful night\'s sleep, waking up several times.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'futile',
    definition: 'Incapable of producing any useful result; pointless',
    example: 'Their attempts to repair the damage proved futile as the storm continued.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vale',
    definition: 'A valley',
    example: 'The small village nestled in a peaceful vale between rolling hills.',
    partOfSpeech: 'noun'
  },
  {
    word: 'verisimilitude',
    definition: 'The appearance of being true or real',
    example: 'The historical novel was praised for its verisimilitude and attention to period details.',
    partOfSpeech: 'noun'
  },
  {
    word: 'atonement',
    definition: 'The action of making amends for a wrong or injury',
    example: 'He made atonement for his mistakes by apologizing and offering to fix the damage.',
    partOfSpeech: 'noun'
  },
  {
    word: 'malign',
    definition: 'To speak harmful untruths about; to slander',
    example: 'She felt her reputation had been maligned by the false accusations.',
    partOfSpeech: 'verb'
  },
  {
    word: 'uncouth',
    definition: 'Lacking good manners, refinement, or grace',
    example: 'His uncouth behavior at the formal dinner embarrassed his friends.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'suave',
    definition: 'Charming, confident, and elegant',
    example: 'The suave diplomat moved easily through the international social circles.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'deft',
    definition: 'Skillful and quick in movement; nimble',
    example: 'The chef\'s deft hands quickly chopped the vegetables into perfectly even pieces.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'debonair',
    definition: 'Confident, stylish, and charming',
    example: 'The debonair actor was known for his elegant style and witty conversation.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'glib',
    definition: 'Speaking or spoken in a fluent, easy way, but without sincerity or meaningful content',
    example: 'The salesman\'s glib promises sounded too good to be true.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'opacity',
    definition: 'The quality of being opaque or not transparent; lack of clarity or obscurity',
    example: 'The opacity of the glass provided privacy while still allowing light to enter.',
    partOfSpeech: 'noun'
  },
  {
    word: 'circumvent',
    definition: 'To find a way around an obstacle or difficulty; to evade or bypass',
    example: 'They tried to circumvent the regulations by using a legal loophole.',
    partOfSpeech: 'verb'
  },
  {
    word: 'facilitate',
    definition: 'To make an action or process easy or easier',
    example: 'The new software is designed to facilitate communication between team members.',
    partOfSpeech: 'verb'
  },
  {
    word: 'scrupulous',
    definition: 'Very careful about doing what is honest and morally right',
    example: 'She was scrupulous about recording every expense in her financial records.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'indiscretion',
    definition: 'Behavior or speech that is indiscreet or lacks good judgment',
    example: 'He regretted his indiscretion in revealing confidential information.',
    partOfSpeech: 'noun'
  },
  {
    word: 'retrospectively',
    definition: 'Looking back on or dealing with past events or situations',
    example: 'Retrospectively, she realized she should have accepted the job offer.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'dawdle',
    definition: 'To waste time or be slow in doing something',
    example: 'Don\'t dawdle or we\'ll be late for the movie.',
    partOfSpeech: 'verb'
  },
  {
    word: 'hitherto',
    definition: 'Until now or until the point in time under discussion',
    example: 'The discovery revealed information that was hitherto unknown to scientists.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'euphoric',
    definition: 'Characterized by or feeling intense excitement and happiness',
    example: 'The team was euphoric after winning the championship.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'mundane',
    definition: 'Lacking interest or excitement; dull; or relating to ordinary life on earth rather than spiritual matters',
    example: 'He was tired of the mundane routine of office work.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'contemplate',
    definition: 'To look thoughtfully at something for a long time; or to think about something deeply',
    example: 'She sat by the window, contemplating her next career move.',
    partOfSpeech: 'verb'
  },
  {
    word: 'derision',
    definition: 'Contemptuous ridicule or mockery',
    example: 'His suggestion was met with derision from his colleagues.',
    partOfSpeech: 'noun'
  },
  {
    word: 'envision',
    definition: 'To imagine or expect something as a future possibility',
    example: 'She envisioned a world where clean energy would replace fossil fuels.',
    partOfSpeech: 'verb'
  },
  {
    word: 'construe',
    definition: 'To interpret or understand in a particular way',
    example: 'His silence was construed as agreement to the plan.',
    partOfSpeech: 'verb'
  },
  {
    word: 'bioluminescent',
    definition: 'Producing or emitting light by a natural biological process',
    example: 'The ocean was filled with bioluminescent plankton that glowed blue in the darkness.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'malevolent',
    definition: 'Having or showing a wish to do evil to others',
    example: 'The villain in the story had a malevolent smile as he revealed his plan.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'Machiavellian',
    definition: 'Cunning, scheming, and unscrupulous, especially in politics',
    example: 'His Machiavellian approach to business involved manipulating competitors for his own gain.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'dire',
    definition: 'Extremely serious or urgent; dreadful',
    example: 'The refugees faced dire conditions in the overcrowded camp.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'vice',
    definition: 'Immoral or wicked behavior; or a moral fault or bad habit',
    example: 'Gambling was his one vice that he couldn\'t seem to overcome.',
    partOfSpeech: 'noun'
  },
  {
    word: 'assaulted',
    definition: 'Attacked violently physically or verbally',
    example: 'The hiker was assaulted by a swarm of angry bees.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'unpalatable',
    definition: 'Not pleasant to taste; or not acceptable or agreeable',
    example: 'The medicine was effective but unpalatable due to its bitter taste.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'make the cut',
    definition: 'To meet the required standard for something; to qualify',
    example: 'Only half of the applicants made the cut for the final round of interviews.',
    partOfSpeech: 'phrase'
  },
  {
    word: 'basking',
    definition: 'Enjoying warmth and pleasure, especially by lying in the sun',
    example: 'The lizards were basking on rocks in the morning sunshine.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'languidly',
    definition: 'In a manner showing a lack of energy or interest; weakly or limply',
    example: 'On the hot summer day, she moved languidly through the garden.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'glowering',
    definition: 'Looking angrily or sullenly; scowling',
    example: 'The teacher was glowering at the students who arrived late to class.',
    partOfSpeech: 'verb (present participle)'
  },
  {
    word: 'dementedly',
    definition: 'In a way that shows a severely disordered state of mind; insanely',
    example: 'The character in the horror film laughed dementedly after revealing his plan.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'fastidiously',
    definition: 'With great attention to detail or with excessive care',
    example: 'She fastidiously arranged each item on her desk at perfect right angles.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'meticulously',
    definition: 'In a way that shows great attention to detail; very thoroughly and carefully',
    example: 'The watchmaker meticulously assembled the tiny components of the timepiece.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'shimmied',
    definition: 'Moved in a shaking or vibrating motion; or moved by wiggling from side to side',
    example: 'She shimmied up the tree to rescue the stranded kitten.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'sentinels',
    definition: 'People or animals that stand guard or keep watch',
    example: 'The tall pine trees stood like sentinels around the perimeter of the camp.',
    partOfSpeech: 'noun (plural)'
  },
  {
    word: 'pirouetted',
    definition: 'Performed a complete turn on one foot, typically with the raised foot touching the knee of the supporting leg',
    example: 'The ballerina pirouetted gracefully across the stage.',
    partOfSpeech: 'verb (past tense)'
  },
  {
    word: 'serrated',
    definition: 'Having a notched edge like a saw',
    example: 'The serrated knife easily cut through the crusty bread.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'calamitous',
    definition: 'Causing great damage or distress; disastrous',
    example: 'The earthquake had calamitous effects on the small coastal village.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'stifling',
    definition: 'Making one feel constrained or unable to breathe; oppressively hot',
    example: 'The stifling heat in the crowded room made it difficult to concentrate.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'despondently',
    definition: 'In a manner showing loss of hope and courage; dejectedly',
    example: 'After failing the exam, he walked home despondently with his head down.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'inextricable',
    definition: 'Impossible to disentangle or separate',
    example: 'The history of the two countries is inextricable, with centuries of shared culture.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sanguine',
    definition: 'Optimistic or positive, especially in a difficult situation',
    example: 'Despite the challenges, she remained sanguine about the project\'s success.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'scintillating',
    definition: 'Sparkling or shining; brilliantly and excitingly clever or skillful',
    example: 'The professor gave a scintillating lecture that kept everyone engaged.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'sublime',
    definition: 'Of very great excellence or beauty; inspiring awe',
    example: 'The view from the mountain top was simply sublime.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'fiend',
    definition: 'An evil spirit or demon; a person who is extremely wicked or cruel',
    example: 'The villain in the story was portrayed as a fiend without any moral principles.',
    partOfSpeech: 'noun'
  },
  {
    word: 'daintily',
    definition: 'In a delicate, pretty, or elegant way',
    example: 'She daintily picked up the teacup with her pinky extended.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'flabbergasting',
    definition: 'Astonishing or deeply shocking',
    example: 'The magician\'s final trick was absolutely flabbergasting to the audience.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'lugubrious',
    definition: 'Looking or sounding sad and dismal',
    example: 'The clown wore a lugubrious expression that made children cry rather than laugh.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'decremental',
    definition: 'Relating to or characterized by decrease or reduction',
    example: 'The battery showed a decremental pattern of power loss over time.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'trepidatious',
    definition: 'Feeling fear or anxiety about something that may happen',
    example: 'The new student was trepidatious about his first day at school.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'competently',
    definition: 'In a way that shows adequate skill or knowledge',
    example: 'She competently handled the emergency situation until help arrived.',
    partOfSpeech: 'adverb'
  },
  {
    word: 'torrid',
    definition: 'Very hot and dry; or full of difficulty or tribulation; or passionate',
    example: 'The explorers struggled through the torrid desert conditions.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'stalwart',
    definition: 'Loyal, reliable, and hardworking; or strongly built and sturdy',
    example: 'He was a stalwart supporter of the cause, never wavering in his commitment.',
    partOfSpeech: 'adjective/noun'
  },
  {
    word: 'stupefying',
    definition: 'Causing someone to feel dazed or stunned; extremely surprising',
    example: 'The news of their sudden marriage had a stupefying effect on their friends.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'battering',
    definition: 'Hitting repeatedly with great force',
    example: 'The coastal town took a battering from the hurricane.',
    partOfSpeech: 'noun/verb (present participle)'
  },
  {
    word: 'cleaver',
    definition: 'A heavy, broad-bladed knife or chopper used especially by butchers',
    example: 'The chef used a cleaver to cut through the thick bone.',
    partOfSpeech: 'noun'
  },
  {
    word: 'byzantine',
    definition: 'Excessively complicated, typically involving a great deal of administrative detail',
    example: 'The tax code is often criticized for its byzantine complexity.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'inconspicuous',
    definition: 'Not clearly visible or attracting attention',
    example: 'She tried to remain inconspicuous at the back of the room.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'gauze',
    definition: 'A thin, transparent fabric used especially for medical dressings',
    example: 'The nurse wrapped gauze around the wound to keep it clean.',
    partOfSpeech: 'noun'
  },
  {
    word: 'sluice',
    definition: 'A sliding gate or other device for controlling the flow of water; or to wash or rinse with freely flowing water',
    example: 'They opened the sluice to allow water into the irrigation channel.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'avow',
    definition: 'To declare or state something openly and with confidence',
    example: 'He avowed his innocence despite the mounting evidence against him.',
    partOfSpeech: 'verb'
  },
  {
    word: 'inset',
    definition: 'A thing that is inserted or set into something else; or to insert something',
    example: 'The map contained a small inset showing the downtown area in greater detail.',
    partOfSpeech: 'noun/verb'
  },
  {
    word: 'splices',
    definition: 'Joins or connects (pieces of rope, film, or magnetic tape) by overlapping and binding the ends',
    example: 'The electrician splices the wires together to complete the circuit.',
    partOfSpeech: 'verb (third person singular)'
  },
  {
    word: 'faun',
    definition: 'A mythological half-human, half-goat creature of the woods',
    example: 'In the painting, a faun played pipes beneath a tree in the forest.',
    partOfSpeech: 'noun'
  },
  {
    word: 'abolition',
    definition: 'The action of abolishing a system, practice, or institution',
    example: 'They campaigned for the abolition of slavery throughout the country.',
    partOfSpeech: 'noun'
  },
  {
    word: 'transalpine',
    definition: 'Situated or occurring on the other side of the Alps (especially from an Italian viewpoint)',
    example: 'The transalpine regions received much more rainfall than the Mediterranean areas.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'liberalism',
    definition: 'A political and moral philosophy based on liberty, consent of the governed, and equality before the law',
    example: 'The newspaper was known for promoting liberalism and progressive ideas.',
    partOfSpeech: 'noun'
  },
  {
    word: 'indulgent',
    definition: 'Having or showing a tendency to allow someone to have what they want; permissive',
    example: 'The grandparents were more indulgent with the children than the parents were.',
    partOfSpeech: 'adjective'
  },
  {
    word: 'ascetic',
    definition: 'Characterized by severe self-discipline and abstention from all forms of indulgence',
    example: 'The monk lived an ascetic lifestyle in his small, bare cell.',
    partOfSpeech: 'adjective/noun'
  },
  {
    "word": "alienated",
    "definition": "Made to feel isolated or estranged from a group or activity",
    "example": "After moving to a new school, she felt alienated from her classmates.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "placid",
    "definition": "Not easily upset or excited; calm and peaceful",
    "example": "The placid lake reflected the mountains like a perfect mirror.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "pragmatic",
    "definition": "Dealing with things sensibly and realistically in a practical way",
    "example": "The manager took a pragmatic approach to solving the budget problem.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "porous",
    "definition": "Having tiny holes that allow liquid or air to pass through",
    "example": "The porous rock absorbed water like a sponge.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "pensively",
    "definition": "In a way that shows deep thought, often with some sadness",
    "example": "She stared pensively out the window, thinking about her grandmother.",
    "partOfSpeech": "adverb"
  },
  {
    "word": "prattle",
    "definition": "To talk at length in a foolish or inconsequential way",
    "example": "The toddler would prattle on about his toys for hours.",
    "partOfSpeech": "verb"
  },
  {
    "word": "discourse",
    "definition": "Written or spoken communication or debate about a particular topic",
    "example": "The professor led an interesting discourse on climate change.",
    "partOfSpeech": "noun"
  },
  {
    "word": "pretence",
    "definition": "An attempt to make something that is not the case appear true",
    "example": "He made a pretence of being interested in the conversation.",
    "partOfSpeech": "noun"
  },
  {
    "word": "procure",
    "definition": "To obtain something, especially with care or effort",
    "example": "The chef worked hard to procure the freshest ingredients for the restaurant.",
    "partOfSpeech": "verb"
  },
  {
    "word": "quintessential",
    "definition": "Representing the most perfect example of a quality or class",
    "example": "She was the quintessential teacher, patient and knowledgeable.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "entrepreneur",
    "definition": "A person who organizes and operates a business, taking financial risks",
    "example": "The young entrepreneur started her own tech company after college.",
    "partOfSpeech": "noun"
  },
  {
    "word": "downsize",
    "definition": "To make something smaller or reduce the number of employees in a company",
    "example": "The company had to downsize due to financial difficulties.",
    "partOfSpeech": "verb"
  },
  {
    "word": "ramifications",
    "definition": "Complex or unwelcome consequences of an action or event",
    "example": "The decision to close the factory had serious ramifications for the local community.",
    "partOfSpeech": "noun (plural)"
  },
  {
    "word": "reel",
    "definition": "To feel shocked or overwhelmed; or a cylinder for winding film, thread, or fishing line",
    "example": "She was still reeling from the unexpected news.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "ratified",
    "definition": "Confirmed or made officially valid by signing or giving formal consent",
    "example": "The treaty was ratified by both countries after months of negotiations.",
    "partOfSpeech": "verb (past tense)"
  },
  {
    "word": "wayward",
    "definition": "Difficult to control or predict because of unusual or unreasonable behavior",
    "example": "The wayward teenager refused to follow any rules set by his parents.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "ward",
    "definition": "A separate room in a hospital; or a person under the protection of a guardian",
    "example": "The patient was moved to the cardiac ward for specialized care.",
    "partOfSpeech": "noun"
  },
  {
    "word": "shoplift",
    "definition": "To steal goods from a shop while pretending to be a customer",
    "example": "The security camera caught him trying to shoplift candy from the store.",
    "partOfSpeech": "verb"
  },
  {
    "word": "condone",
    "definition": "To accept and allow behavior that is considered wrong to continue",
    "example": "The school does not condone bullying in any form.",
    "partOfSpeech": "verb"
  },
  {
    "word": "susceptible",
    "definition": "Likely or liable to be influenced or harmed by something",
    "example": "Young children are particularly susceptible to catching colds.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "prune",
    "definition": "To trim by cutting away dead or overgrown branches; or a dried plum",
    "example": "In spring, we prune the rose bushes to encourage new growth.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "congregate",
    "definition": "To gather together in a crowd or mass",
    "example": "Students congregated in the cafeteria during lunch break.",
    "partOfSpeech": "verb"
  },
  {
    "word": "fraught",
    "definition": "Filled with or likely to result in something undesirable",
    "example": "The journey across the mountain was fraught with danger.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "assertive",
    "definition": "Having or showing a confident and forceful personality",
    "example": "She was assertive during the meeting, making sure her ideas were heard.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "compelling",
    "definition": "Evoking interest, attention, or admiration in a powerfully irresistible way",
    "example": "The documentary told a compelling story about endangered wildlife.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "rivet",
    "definition": "To hold someone's attention completely; or a metal fastener",
    "example": "The thrilling movie riveted the audience from beginning to end.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "spark",
    "definition": "A small fiery particle; or to trigger or initiate something",
    "example": "The innovative idea sparked a revolution in technology.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "coop",
    "definition": "A cage or pen for confining poultry",
    "example": "The chickens were safely locked in their coop for the night.",
    "partOfSpeech": "noun"
  },
  {
    "word": "gamekeeper",
    "definition": "A person employed to breed and protect game animals and birds on an estate",
    "example": "The gamekeeper monitored the wildlife population in the forest preserve.",
    "partOfSpeech": "noun"
  },
  {
    "word": "personal pronoun",
    "definition": "A pronoun that refers to a specific person or thing (I, you, he, she, it, we, they)",
    "example": "In the sentence 'She likes cookies,' the word 'she' is a personal pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "possessive pronoun",
    "definition": "A pronoun that shows ownership (mine, yours, his, hers, its, ours, theirs)",
    "example": "In 'That book is mine,' the word 'mine' is a possessive pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "demonstrative pronoun",
    "definition": "A pronoun that points to specific things (this, that, these, those)",
    "example": "In 'This is my favorite,' the word 'this' is a demonstrative pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "interrogative pronoun",
    "definition": "A pronoun used to ask questions (who, what, which, whom, whose)",
    "example": "In 'What is your name?' the word 'what' is an interrogative pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "relative pronoun",
    "definition": "A pronoun that introduces a relative clause (who, whom, whose, which, that)",
    "example": "In 'The book that I read was exciting,' the word 'that' is a relative pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "indefinite pronoun",
    "definition": "A pronoun that does not refer to any specific person or thing (someone, anybody, nothing, all)",
    "example": "In 'Everyone enjoyed the party,' the word 'everyone' is an indefinite pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "reflexive pronoun",
    "definition": "A pronoun that refers back to the subject (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves)",
    "example": "In 'I hurt myself,' the word 'myself' is a reflexive pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "intensive pronoun",
    "definition": "A pronoun that emphasizes the noun or pronoun it refers to (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves)",
    "example": "In 'I myself will do it,' the word 'myself' is an intensive pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "reciprocal pronoun",
    "definition": "A pronoun that shows a mutual action or relationship (each other, one another)",
    "example": "In 'They helped each other,' the phrase 'each other' is a reciprocal pronoun.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "dynamic verb",
    "definition": "A verb that expresses action or process",
    "example": "In 'She runs every morning,' the word 'runs' is a dynamic verb.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "transitive verb",
    "definition": "A verb that requires a direct object to complete its meaning",
    "example": "In 'She reads books,' the verb 'reads' is transitive because it has the object 'books.'",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "intransitive verb",
    "definition": "A verb that does not require a direct object to complete its meaning",
    "example": "In 'The bird flies,' the verb 'flies' is intransitive because it doesn't need an object.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "nonfinite verb",
    "definition": "A verb form that is not limited by person, number, or tense (infinitives, participles, gerunds)",
    "example": "In 'To swim is fun,' the word 'swim' is part of a nonfinite verb phrase.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "finite verb",
    "definition": "A verb that is limited by person, number, and tense",
    "example": "In 'She walks to school,' the word 'walks' is a finite verb.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "auxiliary verb",
    "definition": "A helping verb used with main verbs to form tenses, moods, and voices (be, have, do)",
    "example": "In 'She is running,' the word 'is' is an auxiliary verb.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "modal verb",
    "definition": "A type of auxiliary verb that expresses necessity, possibility, permission, or ability (can, could, may, might, must, shall, should, will, would)",
    "example": "In 'You should study,' the word 'should' is a modal verb.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "stative verb",
    "definition": "A verb that describes a state of being rather than an action",
    "example": "In 'I love chocolate,' the verb 'love' is stative because it describes a feeling.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "linking verb",
    "definition": "A verb that connects the subject to additional information about the subject",
    "example": "In 'She is happy,' the verb 'is' is a linking verb connecting 'she' to 'happy.'",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "phrasal verb",
    "definition": "A verb combined with a preposition or adverb to create a meaning different from the original verb",
    "example": "In 'Please turn off the light,' the phrase 'turn off' is a phrasal verb.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "attributive adjective",
    "definition": "An adjective that appears before the noun it modifies",
    "example": "In 'the red car,' the word 'red' is an attributive adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "compound adjective",
    "definition": "An adjective made up of two or more words, often connected by hyphens",
    "example": "In 'a well-known author,' the phrase 'well-known' is a compound adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "coordinate adjective",
    "definition": "Adjectives that equally modify a noun and can be separated by commas",
    "example": "In 'a small, cozy room,' the words 'small' and 'cozy' are coordinate adjectives.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "postpositive adjective",
    "definition": "An adjective that appears after the noun it modifies",
    "example": "In 'attorney general,' the word 'general' is a postpositive adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "predicate adjective",
    "definition": "An adjective that follows a linking verb and describes the subject",
    "example": "In 'The sky is blue,' the word 'blue' is a predicate adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "proper adjective",
    "definition": "An adjective derived from a proper noun and usually capitalized",
    "example": "In 'American culture,' the word 'American' is a proper adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "verbal adjective",
    "definition": "An adjective formed from a verb, such as a participle",
    "example": "In 'the running water,' the word 'running' is a verbal adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "possessive adjective",
    "definition": "An adjective that shows ownership (my, your, his, her, its, our, their)",
    "example": "In 'my book,' the word 'my' is a possessive adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "comparative adjective",
    "definition": "An adjective used to compare two things, often ending in -er or using 'more'",
    "example": "In 'She is taller than him,' the word 'taller' is a comparative adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "superlative adjective",
    "definition": "An adjective used to compare three or more things, often ending in -est or using 'most'",
    "example": "In 'She is the tallest in the class,' the word 'tallest' is a superlative adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "quantitative adjective",
    "definition": "An adjective that indicates quantity or amount",
    "example": "In 'several books,' the word 'several' is a quantitative adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "descriptive adjective",
    "definition": "An adjective that describes qualities or characteristics of a noun",
    "example": "In 'beautiful flowers,' the word 'beautiful' is a descriptive adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "demonstrative adjective",
    "definition": "An adjective that points out which noun is being referred to (this, that, these, those)",
    "example": "In 'this book,' the word 'this' is a demonstrative adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "distributive adjective",
    "definition": "An adjective that refers to members of a group individually (each, every, either, neither)",
    "example": "In 'each student,' the word 'each' is a distributive adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "interrogative adjective",
    "definition": "An adjective used to ask questions about nouns (which, what, whose)",
    "example": "In 'Which book do you want?' the word 'which' is an interrogative adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "loiter",
    "definition": "To stand or wait around idly without apparent purpose",
    "example": "The teenagers were asked not to loiter outside the shopping center.",
    "partOfSpeech": "verb"
  },
  {
    "word": "numeral adjective",
    "definition": "An adjective that indicates a specific number or order",
    "example": "In 'three cats,' the word 'three' is a numeral adjective.",
    "partOfSpeech": "noun phrase"
  },
  {
    "word": "cardinal",
    "definition": "A number denoting quantity (one, two, three); or a high-ranking Catholic official",
    "example": "The cardinal numbers tell us 'how many' of something there are.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "versatile",
    "definition": "Able to adapt or be adapted to many different functions or activities",
    "example": "She is a versatile actress who can perform in comedies and dramas equally well.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "reconcile",
    "definition": "To restore friendly relations between; or to make consistent or compatible",
    "example": "After their argument, the friends decided to reconcile and move forward.",
    "partOfSpeech": "verb"
  },
  {
    "word": "coherent",
    "definition": "Logical and consistent; easy to understand",
    "example": "Her essay was well-organized and coherent throughout.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "docile",
    "definition": "Ready to accept control or instruction; submissive",
    "example": "The docile horse was perfect for beginning riders.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "firm",
    "definition": "Having a solid, stable structure; or showing determination",
    "example": "She was firm in her decision not to change her mind.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "astute",
    "definition": "Having or showing an ability to accurately assess situations or people and turn this to one's advantage",
    "example": "The astute investor recognized the potential in the startup company.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "commend",
    "definition": "To praise formally or officially; to recommend",
    "example": "The teacher commended the student for her excellent work on the project.",
    "partOfSpeech": "verb"
  },
  {
    "word": "evade",
    "definition": "To escape or avoid, especially by cleverness or trickery",
    "example": "The suspect tried to evade capture by hiding in the forest.",
    "partOfSpeech": "verb"
  },
  {
    "word": "languorous",
    "definition": "Tiredness or inertia, especially when pleasurable; dreamy relaxation",
    "example": "She spent a languorous afternoon reading in the garden hammock.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "labour",
    "definition": "Work involving physical or mental effort; or to work hard",
    "example": "The construction workers laboured all day to finish the foundation.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "pail",
    "definition": "A bucket, typically made of metal or plastic",
    "example": "She carried water from the well in a metal pail.",
    "partOfSpeech": "noun"
  },
  {
    "word": "witty",
    "definition": "Showing or characterized by quick and inventive verbal humor",
    "example": "His witty remarks kept everyone laughing during the dinner party.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "sleet",
    "definition": "Rain containing some ice, or partly melted falling snow",
    "example": "The sleet made the roads slippery and dangerous for driving.",
    "partOfSpeech": "noun"
  },
  {
    "word": "scouts",
    "definition": "People sent to observe enemy movements; or members of the Scout movement",
    "example": "The scouts explored the trail to find the best route for the hiking group.",
    "partOfSpeech": "noun (plural)"
  },
  {
    "word": "mares",
    "definition": "Adult female horses",
    "example": "The mares grazed peacefully in the pasture with their foals.",
    "partOfSpeech": "noun (plural)"
  },
  {
    "word": "folds",
    "definition": "Bends or creases; or enclosures for sheep",
    "example": "The shepherd gathered the sheep into the folds for the night.",
    "partOfSpeech": "noun (plural)/verb"
  },
  {
    "word": "fore",
    "definition": "Situated or placed in front; or a warning cry in golf",
    "example": "The golfer shouted 'Fore!' to warn others of the approaching ball.",
    "partOfSpeech": "adjective/exclamation"
  },
  {
    "word": "kink",
    "definition": "A sharp twist or curl; or an unusual or peculiar characteristic",
    "example": "There was a kink in the garden hose that stopped the water flow.",
    "partOfSpeech": "noun"
  },
  {
    "word": "honed",
    "definition": "Sharpened or refined through practice or training",
    "example": "She honed her piano skills through years of daily practice.",
    "partOfSpeech": "verb (past tense)"
  },
  {
    "word": "tangent",
    "definition": "A completely different line of thought or action; or a straight line that touches a curve",
    "example": "During his speech, he went off on a tangent about his childhood memories.",
    "partOfSpeech": "noun"
  },
  {
    "word": "fluctuate",
    "definition": "To rise and fall irregularly in number or amount",
    "example": "Stock prices tend to fluctuate throughout the trading day.",
    "partOfSpeech": "verb"
  },
  {
    "word": "renegade",
    "definition": "A person who deserts and betrays an organization, country, or set of principles",
    "example": "The renegade soldier abandoned his post and joined the opposing army.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "prominence",
    "definition": "The state of being important or famous; or something that juts out",
    "example": "The actor rose to prominence after starring in the blockbuster film.",
    "partOfSpeech": "noun"
  },
  {
    "word": "premise",
    "definition": "A previous statement or proposition from which another is inferred; or the land and buildings of a business",
    "example": "The detective's conclusion was based on the premise that the suspect had a motive.",
    "partOfSpeech": "noun"
  },
  {
    "word": "prestige",
    "definition": "Widespread respect and admiration felt for someone or something on the basis of their achievements",
    "example": "The university has great prestige due to its excellent academic programs.",
    "partOfSpeech": "noun"
  },
  {
    "word": "succinct",
    "definition": "Briefly and clearly expressed",
    "example": "Her succinct explanation made the complex topic easy to understand.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "succumbs",
    "definition": "Fails to resist pressure, temptation, or some other negative force",
    "example": "He eventually succumbs to the temptation of eating chocolate cake.",
    "partOfSpeech": "verb (third person singular)"
  },
  {
    "word": "insinuate",
    "definition": "To suggest or hint slyly without directly stating something",
    "example": "She didn't directly accuse him, but she tried to insinuate that he was responsible for the missing money.",
    "partOfSpeech": "verb"
  },
  {
    "word": "allude",
    "definition": "To suggest or call attention to indirectly; hint at",
    "example": "The teacher alluded to the test next week without giving specific details.",
    "partOfSpeech": "verb"
  },
  {
    "word": "alleged",
    "definition": "Said, without proof, to have taken place or to have a specified illegal or undesirable quality",
    "example": "The alleged thief was questioned by police but not yet charged.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "succumbs",
    "definition": "Fails to resist pressure, temptation, or some other negative force",
    "example": "Despite trying to diet, he always succumbs to the temptation of chocolate cake.",
    "partOfSpeech": "verb (third person singular)"
  },
  {
    "word": "succinct",
    "definition": "Briefly and clearly expressed",
    "example": "The manager gave a succinct explanation of the new policy in just two sentences.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "defunct",
    "definition": "No longer existing or functioning",
    "example": "The defunct factory still stands empty after closing twenty years ago.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "eloquent",
    "definition": "Fluent or persuasive in speaking or writing",
    "example": "The politician gave an eloquent speech that moved many people to tears.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "articulate",
    "definition": "Having or showing the ability to speak fluently and coherently",
    "example": "The articulate student clearly explained her science project to the judges.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "estuary",
    "definition": "The tidal mouth of a large river, where the tide meets the stream",
    "example": "Many different species of birds gather at the estuary where the river meets the sea.",
    "partOfSpeech": "noun"
  },
  {
    "word": "gorge",
    "definition": "A narrow valley between hills or mountains, typically with steep rocky walls",
    "example": "The hikers walked carefully along the edge of the deep gorge.",
    "partOfSpeech": "noun"
  },
  {
    "word": "ample",
    "definition": "Large or spacious; more than enough",
    "example": "There was ample room in the garage for both cars and storage.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "lieu",
    "definition": "In place of; instead of",
    "example": "In lieu of flowers, the family requested donations to charity.",
    "partOfSpeech": "noun"
  },
  {
    "word": "deprive",
    "definition": "To deny someone the possession or use of something",
    "example": "The punishment would deprive him of his computer privileges for a week.",
    "partOfSpeech": "verb"
  },
  {
    "word": "pith",
    "definition": "The essence or core of something; or the spongy white tissue lining the rind of citrus fruits",
    "example": "The pith of his argument was that education should be free for everyone.",
    "partOfSpeech": "noun"
  },
  {
    "word": "blatant",
    "definition": "Done openly and unashamedly; completely obvious",
    "example": "His blatant cheating during the game angered the other players.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "impediment",
    "definition": "A hindrance or obstruction in doing something",
    "example": "His stutter was not an impediment to becoming a successful teacher.",
    "partOfSpeech": "noun"
  },
  {
    "word": "threadbare",
    "definition": "Worn so much that the threads show; or lacking originality",
    "example": "His threadbare jacket had been his favorite for many years despite its worn appearance.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "facet",
    "definition": "One side of something many-sided; a particular aspect or feature",
    "example": "The diamond sparkled as light reflected off each facet.",
    "partOfSpeech": "noun"
  },
  {
    "word": "rife",
    "definition": "Of great quantity; abundant; or full of something undesirable",
    "example": "The old building was rife with rumors of being haunted.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "sporadic",
    "definition": "Occurring at irregular intervals or only in a few places; scattered",
    "example": "There were sporadic showers throughout the day, but mostly it was sunny.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "ballad",
    "definition": "A poem or song narrating a story in short stanzas",
    "example": "The folk singer performed a traditional ballad about lost love.",
    "partOfSpeech": "noun"
  },
  {
    "word": "pip",
    "definition": "A small hard seed in a fruit; or a spot on dice or dominoes",
    "example": "She carefully removed every pip from the apple before eating it.",
    "partOfSpeech": "noun"
  },
  {
    "word": "revitalise",
    "definition": "To give new life and vitality to something",
    "example": "The new playground helped revitalise the neighborhood park.",
    "partOfSpeech": "verb"
  },
  {
    "word": "feral",
    "definition": "Wild, especially after escape from captivity or domestication",
    "example": "The feral cats lived in the abandoned warehouse and avoided humans.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "vexed",
    "definition": "Annoyed, frustrated, or worried",
    "example": "She was vexed by the complicated instructions that made no sense.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "uncanny",
    "definition": "Strange or mysterious, especially in an unsettling way",
    "example": "The twins had an uncanny ability to know what each other was thinking.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "residual",
    "definition": "Remaining after the greater part or quantity has gone",
    "example": "Even after cleaning, there was still a residual smell of paint in the room.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "heirloom",
    "definition": "A valuable object that has belonged to a family for several generations",
    "example": "The antique necklace was a family heirloom passed down from her great-grandmother.",
    "partOfSpeech": "noun"
  },
  {
    "word": "bobsleigh",
    "definition": "A mechanically steered and braked sledge used for racing down an ice track",
    "example": "The Olympic bobsleigh team practiced on the icy track every morning.",
    "partOfSpeech": "noun"
  },
  {
    "word": "denim",
    "definition": "A sturdy cotton fabric used for making jeans and other clothing",
    "example": "His denim jacket was perfect for the casual outdoor concert.",
    "partOfSpeech": "noun"
  },
  {
    "word": "fiasco",
    "definition": "A complete failure, especially a ludicrous or humiliating one",
    "example": "The school play was a fiasco when the scenery collapsed during the first act.",
    "partOfSpeech": "noun"
  },
  {
    "word": "debacle",
    "definition": "A sudden and ignominious failure; a complete disaster",
    "example": "The company's product launch turned into a debacle when the main feature didn't work.",
    "partOfSpeech": "noun"
  },
  {
    "word": "emporium",
    "definition": "A large retail store selling a wide variety of goods",
    "example": "The toy emporium had everything from dolls to model trains on its three floors.",
    "partOfSpeech": "noun"
  },
  {
    "word": "boutique",
    "definition": "A small store selling fashionable clothes or accessories",
    "example": "She found a unique dress at the little boutique downtown.",
    "partOfSpeech": "noun"
  },
  {
    "word": "pliable",
    "definition": "Easily bent, flexible; or easily influenced",
    "example": "The pliable wire could be shaped into any form needed for the art project.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "yardstick",
    "definition": "A standard used for comparison; or a measuring stick one yard long",
    "example": "Customer satisfaction is the yardstick by which we measure our success.",
    "partOfSpeech": "noun"
  },
  {
    "word": "vineyard",
    "definition": "A plantation of grapevines, typically producing grapes for winemaking",
    "example": "The vineyard covered the entire hillside with rows of grapevines.",
    "partOfSpeech": "noun"
  },
  {
    "word": "anticipation",
    "definition": "The emotion of looking forward to something with pleasure",
    "example": "The children waited in anticipation for the arrival of the circus.",
    "partOfSpeech": "noun"
  },
  {
    "word": "guffaw",
    "definition": "A loud and boisterous laugh",
    "example": "His joke caused everyone to break into guffaws at the dinner table.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "chortle",
    "definition": "To laugh in a gleeful or chuckling way",
    "example": "The baby chortled with delight when his father made funny faces.",
    "partOfSpeech": "verb"
  },
  {
    "word": "racket",
    "definition": "A loud unpleasant noise; or a fraudulent scheme",
    "example": "The construction work next door made such a racket that nobody could concentrate.",
    "partOfSpeech": "noun"
  },
  {
    "word": "pandemonium",
    "definition": "Wild and noisy disorder or confusion; uproar",
    "example": "When the fire alarm went off, pandemonium broke out as everyone rushed for the exits.",
    "partOfSpeech": "noun"
  },
  {
    "word": "nonchalance",
    "definition": "The state of being relaxed and not showing anxiety, interest, or enthusiasm",
    "example": "Despite the chaos around him, he maintained an air of nonchalance.",
    "partOfSpeech": "noun"
  },
  {
    "word": "synchronise",
    "definition": "To cause to occur or operate at the same time or rate",
    "example": "The swimmers tried to synchronise their movements during the routine.",
    "partOfSpeech": "verb"
  },
  {
    "word": "confined",
    "definition": "Restricted in area or volume; limited",
    "example": "The patient was confined to bed rest for a week after the surgery.",
    "partOfSpeech": "adjective/verb (past tense)"
  },
  {
    "word": "confinement",
    "definition": "The state of being confined; restriction of liberty",
    "example": "After months of confinement due to illness, she was eager to go outside.",
    "partOfSpeech": "noun"
  },
  {
    "word": "deft",
    "definition": "Neatly skillful and quick in one's movements",
    "example": "The chef's deft hands quickly chopped the vegetables into perfect pieces.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "adept",
    "definition": "Very skilled or proficient at something",
    "example": "She was adept at solving complex mathematical problems.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "rind",
    "definition": "The tough outer skin of fruit, cheese, or bacon",
    "example": "He carefully removed the rind from the cheese before serving it.",
    "partOfSpeech": "noun"
  },
  {
    "word": "zeal",
    "definition": "Great energy or enthusiasm in pursuit of a cause or objective",
    "example": "The volunteer worked with great zeal to help the flood victims.",
    "partOfSpeech": "noun"
  },
  {
    "word": "zest",
    "definition": "Great enthusiasm and energy; or the outer peel of citrus fruit",
    "example": "She approached every project with zest and determination.",
    "partOfSpeech": "noun"
  },
  {
    "word": "condiment",
    "definition": "A substance such as salt, mustard, or pickle that is used to add flavor to food",
    "example": "The hot dog stand offered various condiments including ketchup, mustard, and relish.",
    "partOfSpeech": "noun"
  },
  {
    "word": "snooker",
    "definition": "A game played with cues on a billiard table; or to deceive or cheat",
    "example": "They spent the evening playing snooker at the local club.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "impulsive",
    "definition": "Acting suddenly without careful consideration",
    "example": "His impulsive decision to quit his job surprised everyone, including himself.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "noxious",
    "definition": "Harmful, poisonous, or very unpleasant",
    "example": "The noxious fumes from the factory made residents feel sick.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "rowdy",
    "definition": "Noisy and disorderly",
    "example": "The rowdy crowd at the concert had to be calmed down by security.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "render",
    "definition": "To provide or give a service, help, or payment; or to cause to be or become",
    "example": "The accident rendered the car completely unusable.",
    "partOfSpeech": "verb"
  },
  {
    "word": "vacate",
    "definition": "To give up the occupancy of; to leave empty",
    "example": "The tenants had to vacate the apartment by the end of the month.",
    "partOfSpeech": "verb"
  },
  {
    "word": "askew",
    "definition": "To one side; out of the proper position",
    "example": "The picture on the wall hung askew after the earthquake.",
    "partOfSpeech": "adverb/adjective"
  },
  {
    "word": "stairwell",
    "definition": "A shaft in which stairs are located",
    "example": "Emergency lights illuminated the stairwell during the power outage.",
    "partOfSpeech": "noun"
  },
  {
    "word": "wildcard",
    "definition": "A playing card that can represent any card chosen; or an unpredictable element",
    "example": "The new player was a wildcard who could completely change the team's strategy.",
    "partOfSpeech": "noun"
  },
  {
    "word": "radical",
    "definition": "Relating to or affecting the fundamental nature of something; extreme",
    "example": "The company made radical changes to its business model to stay competitive.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "barb",
    "definition": "A sharp projection or critical remark intended to hurt",
    "example": "Her barb about his cooking skills stung more than she intended.",
    "partOfSpeech": "noun"
  },
  {
    "word": "prod",
    "definition": "To poke with a finger, foot, or pointed object; to encourage or urge",
    "example": "His mother had to prod him several times before he finally started his homework.",
    "partOfSpeech": "verb"
  },
  {
    "word": "staunch",
    "definition": "Very loyal and committed; or to stop the flow of something",
    "example": "She was a staunch supporter of environmental protection throughout her career.",
    "partOfSpeech": "adjective/verb"
  },
  {
    "word": "assuredly",
    "definition": "Without doubt; certainly",
    "example": "The team will assuredly win the championship if they continue playing this well.",
    "partOfSpeech": "adverb"
  },
  {
    "word": "brutish",
    "definition": "Resembling or characteristic of a brute; cruel and unpleasant",
    "example": "The brutish behavior of the bully made other students afraid to speak up.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "jeopardy",
    "definition": "Danger of loss, harm, or failure",
    "example": "His reckless driving put everyone in the car in jeopardy.",
    "partOfSpeech": "noun"
  },
  {
    "word": "compiling",
    "definition": "Collecting and assembling information to form something",
    "example": "The researcher spent months compiling data for her report on climate change.",
    "partOfSpeech": "verb (present participle)"
  },
  {
    "word": "dais",
    "definition": "A raised platform for speakers at the front of a hall or room",
    "example": "The principal stood on the dais to address the entire school assembly.",
    "partOfSpeech": "noun"
  },
  {
    "word": "pauper",
    "definition": "A very poor person",
    "example": "Despite being born a pauper, he worked hard to become a successful businessman.",
    "partOfSpeech": "noun"
  },
  {
    "word": "brash",
    "definition": "Self-assertive in a rude, noisy, or overbearing way",
    "example": "The brash young executive interrupted the meeting with his own ideas.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "kestrel",
    "definition": "A small falcon that hovers while hunting for small mammals",
    "example": "The kestrel circled overhead, searching for mice in the field below.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sett",
    "definition": "A badger's den",
    "example": "The naturalist discovered a badger sett hidden among the roots of an old oak tree.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sole",
    "definition": "One and only; single; or the bottom of a foot or shoe",
    "example": "She was the sole survivor of the plane crash.",
    "partOfSpeech": "adjective/noun"
  },
  {
    "word": "drake",
    "definition": "A male duck",
    "example": "The colorful drake led a group of female ducks across the pond.",
    "partOfSpeech": "noun"
  },
  {
    "word": "stallion",
    "definition": "An adult male horse",
    "example": "The magnificent black stallion galloped freely across the meadow.",
    "partOfSpeech": "noun"
  },
  {
    "word": "oboe",
    "definition": "A woodwind instrument with a double reed",
    "example": "The oboe's haunting melody carried beautifully across the concert hall.",
    "partOfSpeech": "noun"
  },
  {
    "word": "brackish",
    "definition": "Water that is slightly salty, as occurs where rivers meet the sea",
    "example": "Many unique plants thrive in the brackish water of coastal marshes.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "spur",
    "definition": "A device worn on a rider's heel to urge a horse forward; or to encourage or prompt",
    "example": "The approaching deadline spurred the team to work faster.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "spar",
    "definition": "To box, especially for practice; or a strong pole used to support rigging on a ship",
    "example": "The two boxers sparred gently during training to practice their technique.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "veal",
    "definition": "The meat of a young calf",
    "example": "The restaurant served veal cutlets with a delicate lemon sauce.",
    "partOfSpeech": "noun"
  },
  {
    "word": "wintry",
    "definition": "Characteristic of winter; cold or bleak",
    "example": "The wintry wind made everyone hurry indoors for warmth.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "parsnip",
    "definition": "A long tapering cream-colored root vegetable",
    "example": "She roasted parsnips with carrots and potatoes for the Sunday dinner.",
    "partOfSpeech": "noun"
  },
  {
    "word": "steeplechase",
    "definition": "A horse race run on a racecourse having ditches and hedges as jumps",
    "example": "The steeplechase was the most exciting event at the horse racing festival.",
    "partOfSpeech": "noun"
  },
  {
    "word": "incompetent",
    "definition": "Not having or showing the necessary skills to do something successfully",
    "example": "The incompetent repair worker made the problem worse instead of fixing it.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "feudalism",
    "definition": "A medieval European system where land was held in exchange for service to a lord",
    "example": "Students learned about feudalism and how it shaped medieval European society.",
    "partOfSpeech": "noun"
  },
  {
    "word": "mitigate",
    "definition": "To make less severe, serious, or painful",
    "example": "The new flood barriers helped mitigate damage during the heavy rains.",
    "partOfSpeech": "verb"
  },
  {
    "word": "onyx",
    "definition": "A semiprecious stone with alternating light and dark bands",
    "example": "The chess set was carved from beautiful black and white onyx.",
    "partOfSpeech": "noun"
  },
  {
    "word": "opal",
    "definition": "A gemstone showing many colors in reflected light",
    "example": "The opal ring sparkled with flashes of blue, green, and pink.",
    "partOfSpeech": "noun"
  },
  {
    "word": "fuchsia",
    "definition": "A vivid purplish-red color; or a plant with drooping flowers",
    "example": "She painted her bedroom wall a bright fuchsia that could be seen from across the street.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "hawthorn",
    "definition": "A thorny shrub or tree with white, pink, or red flowers",
    "example": "The hawthorn hedge provided natural protection around the cottage garden.",
    "partOfSpeech": "noun"
  },
  {
    "word": "gaggle",
    "definition": "A flock of geese; or a disorderly group of people",
    "example": "A gaggle of tourists gathered around the famous monument for photos.",
    "partOfSpeech": "noun"
  },
  {
    "word": "gosling",
    "definition": "A young goose",
    "example": "The mother goose led her goslings to the safety of the water.",
    "partOfSpeech": "noun"
  },
  {
    "word": "gander",
    "definition": "A male goose; or a quick look",
    "example": "Take a gander at this beautiful sunset over the lake.",
    "partOfSpeech": "noun"
  },
  {
    "word": "epoch",
    "definition": "A period of time marked by distinctive characteristics or events",
    "example": "The invention of the internet marked a new epoch in human communication.",
    "partOfSpeech": "noun"
  },
  {
    "word": "saline",
    "definition": "Containing salt; salty",
    "example": "The nurse cleaned the wound with saline solution.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "forage",
    "definition": "To search widely for food or provisions",
    "example": "The squirrels foraged for nuts to store before winter arrived.",
    "partOfSpeech": "verb"
  },
  {
    "word": "liaison",
    "definition": "Communication or cooperation between groups; or a secret romantic relationship",
    "example": "The teacher served as a liaison between the parents and the school administration.",
    "partOfSpeech": "noun"
  },
  {
    "word": "petite",
    "definition": "Small and dainty in build; of small size",
    "example": "The petite dancer moved gracefully across the stage.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "dijon",
    "definition": "A type of mustard that originated in Dijon, France",
    "example": "She spread dijon mustard on her sandwich for extra flavor.",
    "partOfSpeech": "noun"
  },
  {
    "word": "flaxen",
    "definition": "Of a pale yellow color like flax; typically describing hair",
    "example": "The little girl had beautiful flaxen hair that shone in the sunlight.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "tuscan sun",
    "definition": "A warm, golden yellow-orange color reminiscent of the Tuscan countryside",
    "example": "They painted the kitchen wall in tuscan sun to create a warm, welcoming atmosphere.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "medallion",
    "definition": "A piece of jewelry worn on a chain around the neck; or a circular decorative design",
    "example": "He wore a gold medallion that had been passed down through generations.",
    "partOfSpeech": "noun"
  },
  {
    "word": "chartreuse",
    "definition": "A bright yellow-green color",
    "example": "The chartreuse dress was so bright it could be seen from across the room.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "juniper",
    "definition": "An evergreen shrub with small berries used to flavor gin",
    "example": "The gin was flavored with juniper berries for a distinctive taste.",
    "partOfSpeech": "noun"
  },
  {
    "word": "shamrock",
    "definition": "A three-leafed plant used as the national emblem of Ireland",
    "example": "People wear shamrock pins on St. Patrick's Day to celebrate Irish heritage.",
    "partOfSpeech": "noun"
  },
  {
    "word": "parakeet",
    "definition": "A small, long-tailed parrot, typically brightly colored",
    "example": "The bright green parakeet chattered cheerfully in its cage.",
    "partOfSpeech": "noun"
  },
  {
    "word": "seafoam",
    "definition": "A pale blue-green color like foam on the sea",
    "example": "The bathroom was painted in a calming seafoam green.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "slate",
    "definition": "A dark gray rock used for roofing; or a dark gray color",
    "example": "The old house had a slate roof that had lasted for decades.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "cobalt",
    "definition": "A deep blue color; or a metallic chemical element",
    "example": "The artist used cobalt blue paint to create the dramatic sky in her painting.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "azure",
    "definition": "A bright blue color like a clear sky",
    "example": "The azure waters of the Caribbean were incredibly beautiful.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "cerulean",
    "definition": "A deep sky-blue color",
    "example": "The cerulean dress matched the color of the summer sky perfectly.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "aegean",
    "definition": "A blue-green color reminiscent of the Aegean Sea",
    "example": "The tiles were painted in aegean blue to match the Mediterranean theme.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "denim",
    "definition": "A sturdy cotton fabric, typically blue, used for making jeans",
    "example": "His denim jacket was perfect for the casual weekend outing.",
    "partOfSpeech": "noun"
  },
  {
    "word": "alabaster",
    "definition": "A translucent white or cream-colored stone; or very pale and smooth",
    "example": "Her alabaster skin looked porcelain-like in the moonlight.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "chiffon",
    "definition": "A light, sheer fabric typically made of silk or nylon",
    "example": "The bride's chiffon veil flowed gracefully behind her as she walked down the aisle.",
    "partOfSpeech": "noun"
  },
  {
    "word": "granola",
    "definition": "A breakfast food of rolled oats, nuts, and honey",
    "example": "She enjoyed a bowl of granola with fresh berries for breakfast.",
    "partOfSpeech": "noun"
  },
  {
    "word": "egg nog",
    "definition": "A rich drink made with eggs, cream, and usually alcohol, traditionally consumed at Christmas",
    "example": "The family gathered around the fireplace to share egg nog during the holidays.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sepia",
    "definition": "A warm brown color used in old-fashioned photography",
    "example": "The old family photographs were printed in sepia tones.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "latte",
    "definition": "A coffee drink made with espresso and steamed milk",
    "example": "She ordered a vanilla latte to warm up on the cold morning.",
    "partOfSpeech": "noun"
  },
  {
    "word": "biscotti",
    "definition": "Italian twice-baked cookies, often served with coffee",
    "example": "He dipped the almond biscotti into his espresso.",
    "partOfSpeech": "noun"
  },
  {
    "word": "parmesan",
    "definition": "A hard, aged Italian cheese with a sharp flavor",
    "example": "She grated fresh parmesan cheese over the pasta.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sand dollar",
    "definition": "A flat, round sea urchin found on sandy beaches",
    "example": "The children collected sand dollars while walking along the shore.",
    "partOfSpeech": "noun"
  },
  {
    "word": "cider",
    "definition": "An alcoholic drink made from fermented apple juice",
    "example": "They enjoyed warm spiced cider around the campfire.",
    "partOfSpeech": "noun"
  },
  {
    "word": "cantaloupe",
    "definition": "A type of orange-fleshed melon",
    "example": "The ripe cantaloupe was sweet and juicy for the fruit salad.",
    "partOfSpeech": "noun"
  },
  {
    "word": "yam",
    "definition": "A sweet, starchy root vegetable",
    "example": "Roasted yams were served as a side dish for Thanksgiving dinner.",
    "partOfSpeech": "noun"
  },
  {
    "word": "merlot",
    "definition": "A type of red wine grape and the wine made from it",
    "example": "They enjoyed a glass of merlot with their dinner.",
    "partOfSpeech": "noun"
  },
  {
    "word": "garnet",
    "definition": "A deep red gemstone; or the color of this stone",
    "example": "Her garnet earrings sparkled like tiny rubies in the candlelight.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "mahogany",
    "definition": "A hard, reddish-brown wood; or the color of this wood",
    "example": "The dining table was made of beautiful mahogany wood.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "sangria",
    "definition": "A Spanish drink of red wine mixed with fruit and other ingredients",
    "example": "The restaurant served refreshing sangria with dinner on the patio.",
    "partOfSpeech": "noun"
  },
  {
    "word": "fuchsia",
    "definition": "A vivid purplish-red color; or a plant with drooping flowers",
    "example": "She chose fuchsia lipstick to match her bold personality.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "rouge",
    "definition": "A red cosmetic for coloring the cheeks or lips",
    "example": "In the old days, ladies applied rouge to give their cheeks a rosy glow.",
    "partOfSpeech": "noun"
  },
  {
    "word": "rosewood",
    "definition": "A hard, dark wood with a rose-like scent; or its reddish-brown color",
    "example": "The piano was made of expensive rosewood and had a beautiful finish.",
    "partOfSpeech": "noun"
  },
  {
    "word": "taffy",
    "definition": "A chewy candy made by stretching boiled sugar",
    "example": "The children enjoyed saltwater taffy from the boardwalk candy shop.",
    "partOfSpeech": "noun"
  },
  {
    "word": "crepe",
    "definition": "A thin pancake; or a light, crinkled fabric",
    "example": "They served strawberry crepes for brunch at the French restaurant.",
    "partOfSpeech": "noun"
  },
  {
    "word": "mauve",
    "definition": "A pale purple color",
    "example": "The bridesmaids wore mauve dresses that complemented the spring flowers.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "boysenberry",
    "definition": "A large, dark reddish-purple berry; or its color",
    "example": "The boysenberry pie had a rich, sweet-tart flavor.",
    "partOfSpeech": "noun"
  },
  {
    "word": "periwinkle",
    "definition": "A light blue-purple color; or a small flowering plant",
    "example": "The nursery was painted in a soft periwinkle blue.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "mulberry",
    "definition": "A dark purple-red color; or a tree that produces berries",
    "example": "She wore a mulberry silk scarf that complemented her outfit perfectly.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "mocha",
    "definition": "A coffee drink with chocolate; or a brown color",
    "example": "He ordered a mocha latte with extra whipped cream.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "carob",
    "definition": "A brown pod used as a chocolate substitute; or its brown color",
    "example": "The health-conscious baker used carob instead of chocolate in the cookies.",
    "partOfSpeech": "noun"
  },
  {
    "word": "hickory",
    "definition": "A type of North American tree with hard wood; or its light brown color",
    "example": "The kitchen cabinets were made from beautiful hickory wood.",
    "partOfSpeech": "noun"
  },
  {
    "word": "umber",
    "definition": "A natural brown earth pigment; or a dark brown color",
    "example": "The artist used burnt umber to create the shadows in her painting.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "tawny",
    "definition": "An orange-brown or yellowish-brown color",
    "example": "The tawny owl blended perfectly with the autumn leaves.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "brunette",
    "definition": "A person with dark brown hair; or having dark brown hair",
    "example": "The brunette actress was known for her striking beauty.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "cedar",
    "definition": "An evergreen tree with fragrant wood; or its reddish-brown color",
    "example": "The cedar chest kept the clothes smelling fresh and protected from moths.",
    "partOfSpeech": "noun"
  },
  {
    "word": "pewter",
    "definition": "A metal alloy; or its dull gray color",
    "example": "The antique pewter tankard was displayed in the museum.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "porpoise",
    "definition": "A small whale with a blunt snout; or its gray color",
    "example": "A pod of porpoises played in the waves near the boat.",
    "partOfSpeech": "noun"
  },
  {
    "word": "ebony",
    "definition": "A very hard, dark wood; or a deep black color",
    "example": "The piano keys were made of ebony and ivory.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "raven",
    "definition": "A large black bird; or a glossy black color",
    "example": "Her raven hair shone like silk in the moonlight.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "onyx",
    "definition": "A semiprecious stone with bands of color; or deep black",
    "example": "The onyx chess set was a beautiful contrast of black and white.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "soot",
    "definition": "A black powdery substance produced by burning; or its black color",
    "example": "The chimney sweep was covered in soot from cleaning the fireplace.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sable",
    "definition": "A small mammal with dark fur; or a very dark brown or black color",
    "example": "The luxury coat was made from sable fur.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "jade",
    "definition": "A hard green stone used in jewelry; or its green color",
    "example": "The jade bracelet was a gift from her grandmother.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "wistful",
    "definition": "Having or showing a feeling of vague or regretful longing",
    "example": "She had a wistful expression as she looked through old photo albums.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "irate",
    "definition": "Feeling or showing extreme anger",
    "example": "The irate customer demanded to speak to the manager about the poor service.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "assent",
    "definition": "The expression of approval or agreement",
    "example": "The committee gave their assent to the proposed changes.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "heinous",
    "definition": "Utterly odious or wicked",
    "example": "The heinous crime shocked the entire community.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "subversive",
    "definition": "Seeking or intended to subvert or overthrow an established system",
    "example": "The government considered the writer's ideas to be subversive.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "renegade",
    "definition": "A person who deserts and betrays an organization or set of principles",
    "example": "The renegade soldier switched sides during the battle.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "abhorrent",
    "definition": "Inspiring disgust and loathing; repugnant",
    "example": "Most people find cruelty to animals abhorrent.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "errant",
    "definition": "Straying from the proper course or standards",
    "example": "The errant golf ball smashed through the neighbor's window.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "relinquish",
    "definition": "To voluntarily cease to keep or claim; give up",
    "example": "She was forced to relinquish her title as champion after the scandal.",
    "partOfSpeech": "verb"
  },
  {
    "word": "vocation",
    "definition": "A strong feeling of suitability for a particular career; a calling",
    "example": "Teaching was her true vocation, not just a job.",
    "partOfSpeech": "noun"
  },
  {
    "word": "guillotine",
    "definition": "A machine with a heavy blade for beheading people; or a paper cutter",
    "example": "The office guillotine was used to cut large stacks of paper.",
    "partOfSpeech": "noun"
  },
  {
    "word": "hob",
    "definition": "A cooking surface on a stove; or a mythical mischievous sprite",
    "example": "She placed the kettle on the hob to boil water for tea.",
    "partOfSpeech": "noun"
  },
  {
    "word": "ked",
    "definition": "A wingless fly that parasitizes sheep and other animals",
    "example": "The veterinarian treated the sheep for ked infestation.",
    "partOfSpeech": "noun"
  },
  {
    "word": "slew",
    "definition": "A large number or quantity; or past tense of slay",
    "example": "There were a slew of problems to solve before the project could continue.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "gherkins",
    "definition": "Small pickled cucumbers",
    "example": "The sandwich was garnished with tangy gherkins and onions.",
    "partOfSpeech": "noun (plural)"
  },
  {
    "word": "credulous",
    "definition": "Having or showing too great a readiness to believe things",
    "example": "The credulous tourists believed every story the guide told them.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "gullible",
    "definition": "Easily persuaded to believe something; credulous",
    "example": "He was so gullible that he fell for every prank his friends played.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "donor",
    "definition": "A person who gives something, especially to a charity or medical cause",
    "example": "The generous donor contributed millions to the hospital's cancer research.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sesquipedalian",
    "definition": "Given to using long words; or characterized by long words",
    "example": "The professor's sesquipedalian speaking style confused many students.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "the penny dropped",
    "definition": "Someone suddenly understood or realized something",
    "example": "After staring at the math problem for ages, the penny finally dropped and she solved it.",
    "partOfSpeech": "idiom"
  },
  {
    "word": "acquiesce",
    "definition": "To accept something reluctantly without protest",
    "example": "After much debate, the committee decided to acquiesce to the chairman's demands.",
    "partOfSpeech": "verb"
  },
  {
    "word": "cordial",
    "definition": "Warm and friendly; or a sweet fruit-flavored drink",
    "example": "The host gave them a cordial welcome when they arrived.",
    "partOfSpeech": "adjective/noun"
  },
  {
    "word": "allusion",
    "definition": "An indirect reference to something",
    "example": "The poem contained an allusion to Shakespeare's Romeo and Juliet.",
    "partOfSpeech": "noun"
  },
  {
    "word": "allege",
    "definition": "To claim or assert that someone has done something wrong, without proof",
    "example": "The newspaper alleged that the mayor had accepted bribes.",
    "partOfSpeech": "verb"
  },
  {
    "word": "cite",
    "definition": "To quote or refer to as evidence or an example",
    "example": "She cited several studies to support her argument about climate change.",
    "partOfSpeech": "verb"
  },
  {
    "word": "veer",
    "definition": "To change direction suddenly",
    "example": "The car veered sharply to avoid hitting the deer in the road.",
    "partOfSpeech": "verb"
  },
  {
    "word": "snub",
    "definition": "To rebuff, ignore, or spurn disdainfully",
    "example": "She felt hurt when her former friend snubbed her at the party.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "hatchet",
    "definition": "A small ax with a short handle",
    "example": "He used a hatchet to chop kindling for the campfire.",
    "partOfSpeech": "noun"
  },
  {
    "word": "cleaver",
    "definition": "A heavy, broad-bladed knife used by butchers",
    "example": "The chef used a cleaver to cut through the thick bone.",
    "partOfSpeech": "noun"
  },
  {
    "word": "haven",
    "definition": "A place of safety or refuge",
    "example": "The library was a peaceful haven from the noisy city streets.",
    "partOfSpeech": "noun"
  },
  {
    "word": "shaven",
    "definition": "Having the hair removed by shaving",
    "example": "His clean-shaven face made him look younger than his age.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "fickle",
    "definition": "Changing frequently, especially regarding one's loyalties or affections",
    "example": "The fickle weather changed from sunny to stormy within an hour.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "incessant",
    "definition": "Continuing without pause or interruption",
    "example": "The incessant noise from the construction site kept everyone awake.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "meagre",
    "definition": "Lacking in quantity or quality; insufficient",
    "example": "His meagre salary barely covered the basic living expenses.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "substandard",
    "definition": "Below the usual or required standard; inferior",
    "example": "The substandard construction led to problems with the building.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "surplus",
    "definition": "An amount left over when requirements have been met; excess",
    "example": "The farm had a surplus of apples this year due to perfect growing conditions.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "relegate",
    "definition": "To assign to an inferior rank or position",
    "example": "After poor performance, the team was relegated to a lower division.",
    "partOfSpeech": "verb"
  },
  {
    "word": "commend",
    "definition": "To praise formally or officially",
    "example": "The principal commended the students for their excellent behavior during the field trip.",
    "partOfSpeech": "verb"
  },
  {
    "word": "advocate",
    "definition": "A person who publicly supports a particular cause; or to publicly recommend",
    "example": "She is a strong advocate for children's rights.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "ardent",
    "definition": "Enthusiastic or passionate",
    "example": "He was an ardent supporter of environmental protection.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "candid",
    "definition": "Truthful and straightforward; frank",
    "example": "She gave a candid interview about her struggles with addiction.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "reticent",
    "definition": "Not revealing one's thoughts or feelings readily",
    "example": "The reticent teenager rarely spoke about his feelings to his parents.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "explicit",
    "definition": "Stated clearly and in detail, leaving no room for confusion",
    "example": "The teacher gave explicit instructions about how to complete the assignment.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "redundant",
    "definition": "Not needed because something else serves the same purpose; superfluous",
    "example": "The new software made the old system redundant.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "mediocre",
    "definition": "Of only moderate or low quality; not very good",
    "example": "The movie received mediocre reviews from critics.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "beret",
    "definition": "A round, flat cap typically made of wool or felt",
    "example": "The artist wore a classic black beret while painting in the park.",
    "partOfSpeech": "noun"
  },
  {
    "word": "neckerchief",
    "definition": "A square of cloth worn around the neck",
    "example": "The scout wore a neckerchief as part of the official uniform.",
    "partOfSpeech": "noun"
  },
  {
    "word": "chic",
    "definition": "Elegantly and stylishly fashionable",
    "example": "Her chic outfit turned heads at the fashion show.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "witless",
    "definition": "Foolish; lacking intelligence or wit",
    "example": "His witless comments embarrassed everyone at the dinner party.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "inept",
    "definition": "Showing no skill; clumsy",
    "example": "The inept waiter spilled soup on three different customers.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "muster",
    "definition": "To gather or assemble; or to summon up courage or strength",
    "example": "She had to muster all her courage before giving the important speech.",
    "partOfSpeech": "verb"
  },
  {
    "word": "delegate",
    "definition": "A person sent to represent others; or to entrust a task to another",
    "example": "Each state sent a delegate to the national convention.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "raucous",
    "definition": "Making or constituting a disturbingly harsh and loud noise",
    "example": "The raucous laughter from the comedy club could be heard from the street.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "vexing",
    "definition": "Causing annoyance, frustration, or worry",
    "example": "The vexing problem of traffic congestion needed an immediate solution.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "potent",
    "definition": "Having great power, influence, or effect",
    "example": "The medicine was potent and provided quick relief from pain.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "defame",
    "definition": "To damage the good reputation of someone by saying or writing bad things",
    "example": "The newspaper was sued for trying to defame the politician with false stories.",
    "partOfSpeech": "verb"
  },
  {
    "word": "undermine",
    "definition": "To erode the base or foundation of something; to weaken gradually",
    "example": "Constant criticism began to undermine her confidence.",
    "partOfSpeech": "verb"
  },
  {
    "word": "carpentry",
    "definition": "The work of cutting and joining wood in construction",
    "example": "He learned carpentry from his grandfather and became skilled at building furniture.",
    "partOfSpeech": "noun"
  },
  {
    "word": "demure",
    "definition": "Reserved, modest, and shy in manner",
    "example": "Despite her success, she remained demure and soft-spoken in interviews.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "reciprocate",
    "definition": "To respond to a gesture or action by making a corresponding one",
    "example": "She sent him a gift, and he felt obliged to reciprocate her kindness.",
    "partOfSpeech": "verb"
  },
  {
    "word": "recitation",
    "definition": "The action of repeating something aloud from memory",
    "example": "The student's recitation of the poem was flawless and moving.",
    "partOfSpeech": "noun"
  },
  {
    "word": "recidivism",
    "definition": "The tendency of a convicted criminal to reoffend",
    "example": "The rehabilitation program aimed to reduce recidivism rates among former prisoners.",
    "partOfSpeech": "noun"
  },
  {
    "word": "demur",
    "definition": "To raise doubts or objections; to show reluctance",
    "example": "When asked to work overtime again, several employees began to demur.",
    "partOfSpeech": "verb"
  },
  {
    "word": "bile",
    "definition": "A bitter fluid produced by the liver; or anger and irritability",
    "example": "His speech was full of bile and resentment toward his opponents.",
    "partOfSpeech": "noun"
  },
  {
    "word": "carp",
    "definition": "To complain continually; or a type of freshwater fish",
    "example": "Instead of carping about the problem, why don't you suggest a solution?",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "repress",
    "definition": "To subdue or restrain by force; to hold back emotions",
    "example": "She tried to repress her anger during the difficult meeting.",
    "partOfSpeech": "verb"
  },
  {
    "word": "representational",
    "definition": "Relating to or characterized by depiction of things as they actually appear",
    "example": "The artist preferred representational painting over abstract art.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "etymology",
    "definition": "The study of the origin and history of words",
    "example": "The etymology of the word 'silly' shows it originally meant 'blessed' in Old English.",
    "partOfSpeech": "noun"
  },
  {
    "word": "trump",
    "definition": "To surpass or beat; or a playing card of the suit chosen to rank above others",
    "example": "Her excellent presentation trumped all the other proposals.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "returnable",
    "definition": "Able to be returned or given back",
    "example": "The glass bottles were returnable for a small deposit refund.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "reticulum",
    "definition": "A network of fine tubes or fibers; the second stomach of a ruminant",
    "example": "The endoplasmic reticulum is an important structure in plant and animal cells.",
    "partOfSpeech": "noun"
  },
  {
    "word": "transitive",
    "definition": "A verb that requires a direct object to complete its meaning",
    "example": "In the sentence 'She reads books,' the verb 'reads' is transitive.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "ummah",
    "definition": "The worldwide community of Muslims",
    "example": "The concept of ummah emphasizes unity among Muslims regardless of nationality.",
    "partOfSpeech": "noun"
  },
  {
    "word": "secular",
    "definition": "Not connected with religious or spiritual matters",
    "example": "The country has a secular government that separates religion from politics.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "inane",
    "definition": "Lacking sense or meaning; silly",
    "example": "The comedian's inane jokes failed to amuse the sophisticated audience.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "exalt",
    "definition": "To praise enthusiastically; to raise to a higher rank or position",
    "example": "The biography exalted the hero's courage and dedication to his country.",
    "partOfSpeech": "verb"
  },
  {
    "word": "conceited",
    "definition": "Excessively proud of oneself; showing vanity",
    "example": "The conceited actor refused to sign autographs for his fans.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "flog",
    "definition": "To beat with a whip or stick as punishment; to sell something",
    "example": "The street vendor was trying to flog his handmade jewelry to tourists.",
    "partOfSpeech": "verb"
  },
  {
    "word": "carnation",
    "definition": "A fragrant flower with frilled petals, typically pink or white",
    "example": "He wore a red carnation in his buttonhole for the wedding ceremony.",
    "partOfSpeech": "noun"
  },
  {
    "word": "beeline",
    "definition": "A straight line between two places; the most direct route",
    "example": "When the bell rang, the children made a beeline for the playground.",
    "partOfSpeech": "noun"
  },
  {
    "word": "flex",
    "definition": "To bend a limb or joint; to show off one's muscles or abilities",
    "example": "The gymnast had to flex her wrist carefully after the injury.",
    "partOfSpeech": "verb"
  },
  {
    "word": "flecks",
    "definition": "Small patches or spots of color or light",
    "example": "The artist added gold flecks to the painting to make it sparkle.",
    "partOfSpeech": "noun (plural)"
  },
  {
    "word": "receptive",
    "definition": "Willing to consider or accept new suggestions and ideas",
    "example": "The students were receptive to the teacher's innovative teaching methods.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "tardy",
    "definition": "Slow to act or happen; late",
    "example": "The tardy student apologized for arriving after the lesson had begun.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "sombre",
    "definition": "Dark or dull in color or tone; having a serious mood",
    "example": "The funeral was a sombre occasion with everyone dressed in black.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "privy",
    "definition": "Sharing in the knowledge of something secret; or an outdoor toilet",
    "example": "Only a few trusted advisors were privy to the president's plans.",
    "partOfSpeech": "adjective/noun"
  },
  {
    "word": "charisma",
    "definition": "Compelling attractiveness or charm that inspires devotion in others",
    "example": "The politician's charisma helped him win over crowds during his campaign.",
    "partOfSpeech": "noun"
  },
  {
    "word": "tout",
    "definition": "To promote or praise energetically; to solicit business",
    "example": "The company touted its new product as revolutionary technology.",
    "partOfSpeech": "verb"
  },
  {
    "word": "banal",
    "definition": "So lacking in originality as to be obvious and boring",
    "example": "The movie's banal plot failed to engage the audience.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "accomplice",
    "definition": "A person who helps another commit a crime",
    "example": "The police arrested both the thief and his accomplice who drove the getaway car.",
    "partOfSpeech": "noun"
  },
  {
    "word": "confide",
    "definition": "To tell someone about a secret or private matter while trusting them not to repeat it",
    "example": "She confided in her best friend about her fears regarding the job interview.",
    "partOfSpeech": "verb"
  },
  {
    "word": "tome",
    "definition": "A book, especially a large, heavy, scholarly one",
    "example": "The professor carried a thick tome on ancient history under his arm.",
    "partOfSpeech": "noun"
  },
  {
    "word": "thyme",
    "definition": "A small aromatic herb used in cooking",
    "example": "She added fresh thyme to the roasted vegetables for extra flavor.",
    "partOfSpeech": "noun"
  },
  {
    "word": "oral",
    "definition": "Spoken rather than written; relating to the mouth",
    "example": "The students had to take both written and oral examinations.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "pipeline",
    "definition": "A long pipe for conveying water, oil, or gas; or a system for developing something",
    "example": "The company has several new products in the pipeline for next year.",
    "partOfSpeech": "noun"
  },
  {
    "word": "abhorrent",
    "definition": "Inspiring disgust and loathing; repugnant",
    "example": "Most civilized people find violence against children abhorrent.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "jocular",
    "definition": "Fond of joking; humorous or playful",
    "example": "His jocular manner made him popular at parties and social gatherings.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "rancour",
    "definition": "Bitterness or resentfulness, especially long-lasting",
    "example": "Despite their divorce, they managed to avoid rancour for the sake of their children.",
    "partOfSpeech": "noun"
  },
  {
    "word": "erudite",
    "definition": "Having or showing great knowledge gained from reading and study",
    "example": "The erudite professor could discuss literature from many different cultures.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "farce",
    "definition": "A comedy based on ridiculous situations; or an absurd event",
    "example": "The election turned into a farce when none of the candidates showed up to debate.",
    "partOfSpeech": "noun"
  },
  {
    "word": "dane",
    "definition": "A person from Denmark; or a Great Dane dog",
    "example": "The friendly Dane taught us some basic Danish phrases during our visit.",
    "partOfSpeech": "noun"
  },
  {
    "word": "phoenix",
    "definition": "A mythical bird that rises from its own ashes; something reborn or renewed",
    "example": "The city rose like a phoenix from the ashes after the devastating earthquake.",
    "partOfSpeech": "noun"
  },
  {
    "word": "cider",
    "definition": "An alcoholic drink made from fermented apple juice",
    "example": "They enjoyed warm spiced cider by the fireplace on the cold winter evening.",
    "partOfSpeech": "noun"
  },
  {
    "word": "redwood",
    "definition": "A very tall evergreen tree; or its reddish wood",
    "example": "The ancient redwood forest contained trees over a thousand years old.",
    "partOfSpeech": "noun"
  },
  {
    "word": "lupin",
    "definition": "A plant with tall spikes of colorful flowers",
    "example": "The garden was beautiful with purple and pink lupins blooming along the border.",
    "partOfSpeech": "noun"
  },
  {
    "word": "plimsoll",
    "definition": "A canvas sports shoe with a rubber sole",
    "example": "The children wore plimsolls for their physical education class.",
    "partOfSpeech": "noun"
  },
  {
    "word": "scallop",
    "definition": "A marine shellfish; or to cut in a decorative wavy pattern",
    "example": "The chef prepared pan-seared scallops with a butter sauce.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "bugle",
    "definition": "A brass instrument similar to a trumpet but without valves",
    "example": "The soldier played reveille on his bugle to wake the troops at dawn.",
    "partOfSpeech": "noun"
  },
  {
    "word": "wimp",
    "definition": "A weak and cowardly person",
    "example": "Don't be such a wimp—the water isn't that cold!",
    "partOfSpeech": "noun"
  },
  {
    "word": "buck",
    "definition": "A male deer; or to resist or oppose something",
    "example": "The majestic buck stood at the edge of the forest, watching the hikers.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "malt",
    "definition": "Barley that has been steeped and dried for brewing; or a malted drink",
    "example": "The brewery used the finest malt to produce their award-winning beer.",
    "partOfSpeech": "noun"
  },
  {
    "word": "atone",
    "definition": "To make amends for wrongdoing or injury",
    "example": "He tried to atone for his mistakes by volunteering at the community center.",
    "partOfSpeech": "verb"
  },
  {
    "word": "donor",
    "definition": "A person who gives something, especially to a charity or for medical use",
    "example": "The anonymous donor contributed millions to the children's hospital.",
    "partOfSpeech": "noun"
  },
  {
    "word": "dank",
    "definition": "Disagreeably damp, musty, and typically cold",
    "example": "The basement was dank and smelled of mildew after the flooding.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "citrus",
    "definition": "A group of fruits including oranges, lemons, limes, and grapefruits",
    "example": "The vitamin C in citrus fruits helps boost the immune system.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "mesh",
    "definition": "Material made of connected strands forming a net; or to combine well",
    "example": "The wire mesh fence kept the rabbits out of the vegetable garden.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "rasp",
    "definition": "A harsh, grating sound; or a coarse file; or to make such a sound",
    "example": "His voice had developed a rasp after years of smoking.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "couscous",
    "definition": "A North African dish of steamed semolina granules",
    "example": "The restaurant served lamb tagine with fluffy couscous and vegetables.",
    "partOfSpeech": "noun"
  },
  {
    "word": "taint",
    "definition": "To contaminate or pollute; or a trace of something bad or undesirable",
    "example": "The scandal tainted his reputation for years to come.",
    "partOfSpeech": "verb/noun"
  },
  {
    "word": "lea",
    "definition": "An open area of grassy land; a meadow",
    "example": "The sheep grazed peacefully in the green lea beside the stream.",
    "partOfSpeech": "noun"
  },
  {
    "word": "sill",
    "definition": "A horizontal piece forming the bottom of a window or door frame",
    "example": "She placed potted herbs on the kitchen window sill to catch the morning sun.",
    "partOfSpeech": "noun"
  },
  {
    "word": "analogy",
    "definition": "A comparison between two things to explain or clarify something",
    "example": "The teacher used the analogy of a heart as a pump to explain circulation.",
    "partOfSpeech": "noun"
  },
  {
    "word": "loll",
    "definition": "To sit, lie, or stand in a lazy, relaxed way",
    "example": "The cat lolled in the sunny spot by the window all afternoon.",
    "partOfSpeech": "verb"
  },
  {
    "word": "dole",
    "definition": "Government benefit paid to unemployed people; or to distribute sparingly",
    "example": "After losing his job, he had to rely on the dole until he found new employment.",
    "partOfSpeech": "noun/verb"
  },
  {
    "word": "brink",
    "definition": "The extreme edge of something; a critical point",
    "example": "The company was on the brink of bankruptcy before the new investor arrived.",
    "partOfSpeech": "noun"
  },
  {
    "word": "dwindle",
    "definition": "To diminish gradually in size, amount, or strength",
    "example": "Their savings began to dwindle after months of unemployment.",
    "partOfSpeech": "verb"
  },
  {
    "word": "detest",
    "definition": "To dislike intensely; to hate",
    "example": "She detested having to wake up early for work every morning.",
    "partOfSpeech": "verb"
  },
  {
    "word": "genial",
    "definition": "Friendly and cheerful; having a pleasant manner",
    "example": "The genial host made sure all guests felt welcome at the party.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "sham",
    "definition": "Something that is not what it appears to be; fake or false",
    "example": "The antique turned out to be a sham, made only last year.",
    "partOfSpeech": "noun/adjective"
  },
  {
    "word": "maim",
    "definition": "To wound or injure someone permanently",
    "example": "The accident maimed his left hand, affecting his ability to play piano.",
    "partOfSpeech": "verb"
  },
  {
    "word": "bran",
    "definition": "The hard outer layer of cereal grain",
    "example": "She added wheat bran to her muffin recipe for extra fiber.",
    "partOfSpeech": "noun"
  },
  {
    "word": "elan",
    "definition": "Energy, style, and enthusiasm",
    "example": "The young dancer performed with remarkable elan and grace.",
    "partOfSpeech": "noun"
  },
  {
    "word": "beet",
    "definition": "A root vegetable, typically dark red",
    "example": "The salad was topped with sliced roasted beets and goat cheese.",
    "partOfSpeech": "noun"
  },
  {
    "word": "teem",
    "definition": "To be full of or swarming with",
    "example": "The pond teemed with fish and aquatic life during the summer months.",
    "partOfSpeech": "verb"
  },
  {
    "word": "prominent",
    "definition": "Important, famous, or noticeable; projecting outward",
    "example": "She became a prominent figure in the environmental movement.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "abstruse",
    "definition": "Difficult to understand; obscure",
    "example": "The professor's abstruse lecture on quantum physics confused most students.",
    "partOfSpeech": "adjective"
  },
  {
    "word": "vitality",
    "definition": "The state of being strong, active, and energetic; liveliness",
    "example": "Despite her advanced age, she maintained remarkable vitality and enthusiasm.",
    "partOfSpeech": "noun"
  },
  {
    "word": "effervescence",
    "definition": "Vivacity and enthusiasm; or the quality of giving off bubbles",
    "example": "Her natural effervescence made her the life of every party she attended.",
    "partOfSpeech": "noun"
  }
];

// Function to remove duplicates
const removeDuplicates = (wordArray) => {
  const wordMap = new Map();
  
  return wordArray.filter(wordObj => {
    const lowerCaseWord = wordObj.word.toLowerCase();
    
    if (!wordMap.has(lowerCaseWord)) {
      wordMap.set(lowerCaseWord, true);
      return true;
    }
    
    return false;
  });
};

// Create the deduplicated list
const vocabularyWords = removeDuplicates(allWords);

export default vocabularyWords;
