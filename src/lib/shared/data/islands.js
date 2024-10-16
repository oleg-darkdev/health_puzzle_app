const islands = [
  {
    id: '1',
    icon: 'atmosphere.svg',
    title: `«Мораль и атмосфера в команде»`,
    desc: [
      `Мораль и атмосфера в команде играют ключевую роль в создании продуктивной и инновационной рабочей среды. Этот сценарий охватывает аспекты, касающиеся признания вклада каждого участника, открытости и доверия в команде, а также общей сплоченности и мотивации.`
    ],
    items: [
    {
      q: 'Признание вклада каждого участника команды?',
      positive: 'Члены команды регулярно получают положительные отзывы о своей работе, достижения каждого отмечаются на встречах, и все чувствуют, что их вклад ценят.',
      negative: 'Работа команды часто остается незамеченной, никто не хвалит за достижения, и участники чувствуют, что их вклад недооценен.'
    },
    {
      q: 'Открытость и доверие в команде для обсуждения проблем?',
      positive: 'Члены команды чувствуют себя комфортно, обсуждая любые проблемы. Все открыто говорят о трудностях, и эти обсуждения приводят к позитивным изменениям.',
      negative: 'Существует страх обсуждать проблемы. Люди избегают откровенных разговоров из-за опасения быть осужденными, что ведет к накоплению негатива.'
    },
    {
      q: 'Команда объединена и работает как единое целое?',
      positive: 'Команда отлично взаимодействует, поддерживает друг друга в любых ситуациях, задачи распределяются равномерно, а все члены чувствуют, что работают над общими целями.',
      negative: 'В команде ощущается разделение, члены команды работают каждый сам по себе, слабо координируясь между собой, что приводит к задержкам и конфликтам.'
    },
    {
      q: 'Мотивация на выполнение текущих задач?',
      positive: 'Члены команды вдохновлены своими задачами, у каждого есть чёткое понимание своей роли и они видят ценность своей работы в общем успехе.',
      negative: 'Мотивация в команде на низком уровне. Люди работают без энтузиазма, не понимают, как их задачи связаны с общими целями проекта.'
    },
    {
      q: 'Работа в комфортном темпе, или есть перегрузки?',
      positive: 'Команда работает в стабильном ритме, успевая выполнять задачи без чрезмерной спешки. Все чувствуют баланс между работой и личной жизнью.',
      negative: 'Члены команды часто жалуются на перегрузки, многие работают сверхурочно, и это ведет к выгоранию и снижению качества работы.'
    },
    {
      q: 'Справляемся ли мы с текущими задачами, или регулярные авралы?',
      positive: 'Команда успешно завершает все задачи в срок, авралы редки и случаются только при форс-мажорах.',
      negative: 'Задачи часто не успевают завершить вовремя, авралы стали нормой, что приводит к постоянному стрессу у команды.'
    },
    {
      q: 'Поставленные дедлайны реальны и достижимы?',
      positive: 'Дедлайны обсуждаются с командой, и они всегда достижимы, что позволяет планировать работу без спешки и нарушений сроков.',
      negative: 'Дедлайны слишком жёсткие и недостижимы, часто пересматриваются в последний момент, что создаёт хаос в планировании.'
    },


    // Взаимодействие и поддержка внутри команды
    {
      q: 'Поддержка со стороны коллег?',
      positive: 'Коллеги всегда готовы помочь, вне зависимости от их загрузки, поддержка оказывается оперативно, что создает дружелюбную и продуктивную атмосферу.',
      negative: 'Поддержка со стороны коллег минимальна, каждый работает сам за себя, и многие проблемы приходится решать в одиночку.'
    },
    {
      q: 'Открытое и безопасное обсуждение ошибок и успехов?',
      positive: 'Ошибки и успехи обсуждаются открыто, без осуждения, что помогает команде учиться на ошибках и улучшать свои результаты.',
      negative: 'Ошибки замалчиваются или воспринимаются с критикой, что создаёт атмосферу страха и недоверия, мешающую развитию.'
    },
    {
      q: 'Культура регулярного обмена знаниями и опытом?',
      positive: 'В команде активно делятся знаниями и опытом, проводятся регулярные сессии обмена опытом, что помогает улучшать навыки всех участников.',
      negative: 'Обмен знаниями практически отсутствует, каждый работает в изоляции, что замедляет развитие команды и решение сложных задач.'
    },
    {
      q: 'Празднование успехов и достижений команды?',
      positive: 'Успехи и достижения команды регулярно отмечаются, что способствует мотивации и чувству единства в коллективе.',
      negative: 'Успехи редко признаются, их не празднуют, и команда не чувствует удовлетворения от проделанной работы.'
    },


    // Взаимодействие и поддержка внутри команды
    {
      q: 'Удовлетворённость процессами, которые использует команда?',
      positive: 'Команда довольна текущими процессами, они позволяют работать продуктивно и предсказуемо, с минимальным количеством задержек и сбоев.',
      negative: 'Процессы кажутся устаревшими и неэффективными, они часто замедляют работу, и команда тратит много времени на выполнение ненужных процедур.'
    },
    {
      q: 'Эффективность в коммуникациях между членами команды?',
      positive: 'Коммуникация внутри команды хорошо налажена: обсуждения проходят оперативно, информация передается быстро, а вопросы решаются без задержек.',
      negative: 'Коммуникация между членами команды оставляет желать лучшего, информация часто теряется, что приводит к недопониманиям и задержкам в выполнении задач.'
    },
    {
      q: 'Эффективность планирования и приоритизации задач?',
      positive: 'Планирование задач проходит четко, приоритеты расставлены правильно, и команда всегда знает, что нужно делать в первую очередь.',
      negative: 'Планирование нерегулярное, приоритизация часто меняется, что приводит к хаосу и задержкам в выполнении задач.'
    }
  ]
  },
  {
    id: '2',
    icon: 'product.svg',
    title: `«Качество продукта»`,
    desc: [
      `Качество продукта является ключевым аспектом, определяющим успех команды и удовлетворенность пользователей. В этом сценарии мы исследуем, насколько эффективно команда поддерживает высокие стандарты качества в процессе разработки и какие меры принимаются для управления техническим долгом и контролем качества.`
    ],
  items: [
    {
      q: 'Удовлетворение качеством продукта, которые мы выпускаем?',
      positive: 'Команда довольна качеством продукта, все фичи и улучшения проходят тщательное тестирование, а пользователи довольны результатом.',
      negative: 'Члены команды часто жалуются на недостаточное качество продукта, много багов и недоработок остаются незамеченными до релиза, что вызывает негативную обратную связь от пользователей.'
    },
    {
      q: 'Количество технического долга?',
      positive: 'Технический долг держится на минимальном уровне, команда регулярно выделяет время на его снижение, что помогает поддерживать хороший темп разработки.',
      negative: 'Технический долг постоянно растёт, команда не успевает его решать, что затрудняет внедрение новых фич и снижает стабильность продукта.'
    },
    {
      q: 'Поддержание стабильно высокого качества продукта?',
      positive: 'В команде внедрены процессы для регулярного контроля качества, что позволяет нам поддерживать стабильный и высокий уровень продукта на каждом этапе разработки.',
      negative: 'Качество продукта нестабильно, иногда релизы выходят с критическими багами, а времени на тестирование часто не хватает.'
    },
    {
      q: 'Есть ли системы мониторинга и сбора обратной связи от пользователей?',
      positive: 'Команда активно использует системы мониторинга и обратной связи, что позволяет быстро выявлять и устранять проблемы с качеством продукта.',
      negative: 'Нет систем для мониторинга и сбора обратной связи от пользователей, что приводит к тому, что проблемы остаются незамеченными до получения негативных отзывов.'
    },
    {
      q: 'Как часто проводятся тестирования и проверки качества?',
      positive: 'Тестирование продукта осуществляется на всех этапах разработки, включая юнит-тесты, интеграционные тесты и пользовательское тестирование.',
      negative: 'Тестирование продукта проводится редко, что приводит к тому, что многие баги не обнаруживаются до релиза, и пользователи сталкиваются с проблемами.'
    },
    {
      q: 'Насколько быстро мы реагируем на обнаруженные проблемы?',
      positive: 'Команда быстро реагирует на обнаруженные проблемы, устраняет их в короткие сроки, что повышает доверие пользователей к продукту.',
      negative: 'Реакция на обнаруженные проблемы затягивается, и пользователи часто вынуждены ждать исправлений, что негативно сказывается на их удовлетворенности.'
    },
    {
      q: 'Соблюдаются ли стандарты разработки и качества?',
      positive: 'Команда строго соблюдает установленные стандарты разработки и качества, что позволяет избежать многих проблем и обеспечивает высокий уровень продукта.',
      negative: 'Стандарты разработки и качества не всегда соблюдаются, что приводит к недочетам и несоответствиям в продукте.'
    },
    {
      q: 'Как организована работа с техническим долгом?',
      positive: 'Команда активно управляет техническим долгом, внедряя его устранение в процесс разработки, что позволяет поддерживать код в хорошем состоянии.',
      negative: 'Работа с техническим долгом не организована, его устранение откладывается, что приводит к накоплению проблем в кодовой базе.'
    },
    {
      q: 'Существуют ли процессы для улучшения качества продукта?',
      positive: 'В команде есть четкие процессы и метрики для улучшения качества продукта, что позволяет регулярно повышать его уровень.',
      negative: 'Процессы для улучшения качества продукта неформализованы, что затрудняет системный подход к его повышению.'
    },
    {
      q: 'Как осуществляется контроль за качеством кода?',
      positive: 'В команде внедрены регулярные код-ревью, где каждый разработчик получает конструктивную обратную связь, что позволяет поддерживать высокое качество кода.',
      negative: 'Контроль за качеством кода практически не осуществляется, что приводит к накоплению технических недочетов и снижению общей стабильности продукта.'
    },
    {
      q: 'Какова степень удовлетворенности пользователей нашим продуктом?',
      positive: 'Пользователи регулярно оставляют положительные отзывы о продукте и его функциональности, что свидетельствует о высоком уровне удовлетворенности.',
      negative: 'Существует множество жалоб от пользователей, касающихся неудобства в использовании и наличия ошибок, что указывает на низкий уровень удовлетворенности.'
    }
  ]
  },
  {
    id: '3',
    icon: 'communications.svg',
    title: `«Коммуникация, Ретроспективы и улучшения»`,
    desc: [
      `Этот сценарий исследует, насколько эффективно команда взаимодействует между собой и как регулярные ретроспективы способствуют улучшению рабочих процессов. Открытая и прозрачная коммуникация является основой успешной команды, позволяя каждому члену свободно выражать свои мысли и идеи, а также обсуждать возникающие проблемы.`

    ],
    items: [
    {
      q: 'Прозрачны и понятны задачи, которые стоят перед командой?',
      positive: 'Задачи четко сформулированы и всегда обсуждаются с командой, что позволяет каждому понимать свою роль и приоритеты.',
      negative: 'Задачи часто неясны, команда получает разрозненные или противоречивые инструкции, что ведет к путанице и снижению продуктивности.'
    },
    {
      q: 'Свободное выражение мнения и обсуждение идей с командой?',
      positive: 'Члены команды чувствуют себя комфортно, свободно высказывают свои идеи и обсуждают их без страха критики, что способствует инновациям.',
      negative: 'Многие участники команды боятся высказывать свое мнение, идеи не обсуждаются открыто, что приводит к отсутствию инициативы и развития.'
    },
    {
      q: 'Качество обратной связи от коллег?',
      positive: 'Обратная связь дается конструктивно и регулярно, помогает команде улучшать свою работу и совершенствовать процессы.',
      negative: 'Обратная связь от коллег редка и часто бывает недостаточно конструктивной, что мешает росту и развитию сотрудников.'
    },
    {
      q: 'Чёткие и понятные каналы для обсуждения проблем или предложений?',
      positive: 'Каналы для обсуждения проблем и предложений прозрачны и понятны, каждый знает, куда обращаться с вопросами и предложениями.',
      negative: 'Нет четких каналов для обсуждения, люди не знают, куда обращаться с проблемами, что приводит к их накоплению и снижению продуктивности.'
    },
        {
      q: 'Ретроспективы помогают команде стать более продуктивными?',
      positive: 'Ретроспективы проводятся регулярно и помогают выявлять узкие места в работе, что позволяет команде постоянно улучшать продуктивность и процессы.',
      negative: 'Ретроспективы часто носят формальный характер и не приводят к реальным улучшениям, команда не видит пользы от их проведения.'
    },
    {
      q: 'Предложения по улучшению внедряются в процесс работы?',
      positive: 'Предложения, обсуждаемые на ретроспективах, быстро внедряются в рабочие процессы, что положительно влияет на общую эффективность команды.',
      negative: 'Предложения по улучшению редко внедряются, большинство идей остаются нереализованными, что снижает доверие к ретроспективам.'
    },
    {
      q: 'Сохранение мотивации на изменения, после ретроспектив?',
      positive: 'Команда остаётся мотивированной на реализацию изменений после ретроспектив, и с энтузиазмом работает над улучшениями.',
      negative: 'Мотивация на изменения быстро снижается после ретроспектив, и команда возвращается к прежним привычкам без внедрения улучшений.'
      },
    {
  q: 'Как мы справляемся с конфликтами в команде?',
  positive: 'Конфликты обсуждаются открыто и конструктивно, команда находит решения, которые удовлетворяют всех, что способствует укреплению отношений.',
  negative: 'Конфликты игнорируются или замалчиваются, что приводит к напряженности и снижению доверия между членами команды.'
},
{
  q: 'Как часто проводятся встречи для обмена информацией?',
  positive: 'Регулярные встречи по обмену информацией проходят каждую неделю, что помогает команде оставаться в курсе происходящего и координировать действия.',
  negative: 'Встречи по обмену информацией проводятся нерегулярно, из-за чего члены команды не всегда знают о текущих задачах и проблемах.'
},
{
  q: 'Какое отношение к изменениям в процессе работы?',
  positive: 'Команда воспринимает изменения как возможность для роста и улучшения, активно участвуя в их внедрении.',
  negative: 'Изменения воспринимаются с недоверием, команда сопротивляется нововведениям, что замедляет прогресс.'
},
{
  q: 'Как мы отмечаем успехи команды?',
  positive: 'Команда регулярно отмечает свои достижения, что способствует повышению морального духа и укрепляет командный дух.',
  negative: 'Успехи команды часто остаются незамеченными, что приводит к снижению мотивации и удовлетворенности работой.'
},
{
  q: 'Насколько хорошо команда обучается на своих ошибках?',
  positive: 'Команда открыто обсуждает ошибки и уроки, извлеченные из них, что способствует постоянному обучению и улучшению процессов.',
  negative: 'Ошибки часто игнорируются, и команда не использует их как возможность для обучения, что приводит к повторению тех же проблем.'
}
  ]
  },
  {
    id: '4',
    icon: 'autonomy.svg',
    title: `«Автономия и ответственность, поддержка со стороны руководства»`,
    desc: [
            `В этом сценарии мы исследуем уровень автономии, с которым работают члены команды, а также степень их ответственности за результаты. Наличие автономии является критически важным для повышения мотивации и вовлеченности сотрудников, позволяя им принимать решения и управлять своими задачами.`

    ],
    items: [
    {
      q: 'Достаточная автономия при выполнении задач?',
      positive: 'Команда обладает высокой степенью автономии, каждый член может самостоятельно выбирать, как лучше выполнить свою задачу, что повышает мотивацию.',
      negative: 'Автономия ограничена, задачи строго предписаны, и нет гибкости в выборе способов их выполнения, что снижает креативность и инициативу.'
    },
    {
      q: 'Возможность принимать решения, касающиеся твоей работы?',
      positive: 'У каждого члена команды есть возможность принимать решения по своей работе, это способствует росту ответственности и чувству личной причастности к результату.',
      negative: 'Члены команды не имеют возможности принимать решения по своей работе, все ключевые решения принимаются руководством без учёта их мнений.'
    },
    {
      q: 'Чувствуется ли ответственность за результат?',
      positive: 'Каждый член команды осознает свою ответственность за общий результат и работает с пониманием того, как его вклад влияет на успех проекта.',
      negative: 'Ответственность размыта, многие не понимают, как их работа влияет на конечный результат, что приводит к снижению мотивации.'
    },
    {
      q: 'Команда имеет влияние на конечный продукт?',
      positive: 'Команда активно влияет на конечный продукт, её идеи и предложения учитываются при разработке, что повышает вовлечённость.',
      negative: 'Команда не ощущает влияния на конечный продукт, решения принимаются без их участия, что снижает мотивацию и чувство значимости.'
    },
    {
      q: 'Ясность в распределении обязанностей и ролей внутри команды?',
      positive: 'Роли и обязанности четко распределены, каждый знает свою зону ответственности, что помогает эффективно организовывать работу.',
      negative: 'В команде нет ясности в распределении ролей, что приводит к дублированию задач, путанице и снижению продуктивности.'
    },


    // поддержка со стороны руководства
    {
      q: 'Необходимая поддержка и помощь от руководства?',
      positive: 'Руководство всегда доступно для обсуждения проблем и предлагает своевременную помощь. Команда чувствует поддержку и знает, что может обратиться за помощью при необходимости.',
      negative: 'Руководство часто не вовлечено в решение проблем команды, поддержка оказывается нерегулярно, и многие вопросы остаются без внимания.'
    },
    {
      q: 'Чётко поставленные приоритеты для команды?',
      positive: 'Приоритеты команды ясны и согласованы с руководством. Все понимают, над чем работать в первую очередь, и это помогает эффективно планировать работу.',
      negative: 'Приоритеты часто меняются без объяснений, что приводит к путанице и неопределённости в команде, снижая продуктивность.'
    },
    {
      q: 'Руководство прислушивается к предложениям и проблемам?',
      positive: 'Руководство активно собирает обратную связь от команды и открыто для предложений. Идеи сотрудников учитываются при принятии решений.',
      negative: 'Предложения команды игнорируются, руководство редко обращает внимание на проблемы, о которых говорят сотрудники.'
    },
    {
      q: 'Своевременное устранение препятствий, которые мешают команде двигаться вперёд?',
      positive: 'Руководство быстро реагирует на проблемы, которые могут тормозить работу команды, и активно помогает устранить препятствия.',
      negative: 'Многие проблемы остаются нерешёнными в течение длительного времени, что тормозит работу команды и снижает её эффективность.'
    },
    {
      q: 'Прозрачность в принимаемых решениях, руководством или командой?',
      positive: 'Решения принимаются прозрачно, руководство открыто обсуждает причины и цели каждого шага, что создает ощущение вовлечённости у всей команды.',
      negative: 'Многие решения принимаются за закрытыми дверями, и команда не понимает, почему были выбраны те или иные действия, что создаёт недоверие.'
    }
  ]
  },
  {
    id: '5',
    icon: 'innovation.svg',
    title: `«Инновации и эксперименты»`,
    desc: [
      `В современном постоянно изменяющемся мире - инновации и эксперименты являются ключевыми факторами успеха.`,
      `В данном сценарии мы оцениваем готовность команды внедрять новые идеи, проводить эксперименты и адаптироваться к изменениям.`
    ],
    items: [
    {
      q: 'Команда открыта к внедрению новых идей и экспериментов?',
      positive: 'Команда активно обсуждает и внедряет новые идеи, все члены команды могут предлагать инновации, и они рассматриваются как способ улучшения работы.',
      negative: 'Новые идеи редко принимаются всерьез, команда предпочитает следовать устоявшимся процессам, что затрудняет инновации и эксперименты.'
    },
    {
      q: 'Возможность работать над чем-то новым и интересным?',
      positive: 'Члены команды имеют возможность участвовать в интересных проектах и пробовать новые технологии, что поддерживает высокий уровень мотивации.',
      negative: 'Команда редко получает возможность работать над чем-то новым, задачи однообразны, что снижает мотивацию и интерес к работе.'
    },
    {
      q: 'Достаточно времени для инноваций и исследований?',
      positive: 'Команда выделяет время для исследований и экспериментов, что помогает находить новые и более эффективные решения для проектов.',
      negative: 'Из-за загруженности операционными задачами времени на эксперименты и исследования не хватает, что мешает команде развиваться и улучшать процессы.'
    },
    {
      q: 'Руководство открыто к предложениям по изменениям и экспериментам?',
      positive: 'Руководство активно поддерживает инновации, готово рассматривать любые предложения по улучшению и экспериментам, что мотивирует команду на поиск новых решений.',
      negative: 'Руководство консервативно относится к изменениям, и предложения по экспериментам часто игнорируются, что тормозит развитие команды.'
    },
    {
      q: 'Руководство оказывает поддержку для тестирования новых решений и подходов?',
      positive: 'Руководство оказывает полную поддержку в тестировании новых решений, выделяет ресурсы и время на эксперименты, что позволяет команде безопасно внедрять инновации.',
      negative: 'Руководство не предоставляет достаточной поддержки для тестирования новых решений, что ограничивает возможности команды для внедрения инноваций.'
      },
    {
  q: 'Как часто команда проводит мозговые штурмы для генерации идей?',
  positive: 'Команда регулярно организует мозговые штурмы, на которых каждый может предложить свои идеи, что способствует креативности и открытости к инновациям.',
  negative: 'Мозговые штурмы проводятся крайне редко, и члены команды неохотно предлагают идеи, что снижает уровень инновационности.'
},
{
  q: 'Как мы справляемся с неудачами в экспериментах?',
  positive: 'Команда рассматривает неудачи как возможность для обучения, анализируя ошибки и находя пути для улучшения в будущем.',
  negative: 'Неудачи в экспериментах воспринимаются негативно, и команда боится пробовать новое, чтобы не рисковать репутацией.'
},
{
  q: 'Насколько важно для команды следить за последними тенденциями в индустрии?',
  positive: 'Команда активно следит за последними тенденциями и технологиями, что помогает находить инновационные решения и оставаться конкурентоспособными.',
  negative: 'Команда редко обращает внимание на новые тренды и технологии, что приводит к отставанию от конкурентов.'
},
{
  q: 'Какова культура экспериментов внутри команды?',
  positive: 'Команда поощряет эксперименты и воспринимает их как естественную часть рабочего процесса, что способствует постоянному развитию.',
  negative: 'Эксперименты рассматриваются с недоверием, и члены команды предпочитают придерживаться проверенных методов, что сдерживает инновации.'
},
{
  q: 'Насколько команда готова адаптироваться к изменениям?',
  positive: 'Команда быстро адаптируется к изменениям и нововведениям, что позволяет эффективно внедрять инновации.',
  negative: 'Команда сопротивляется изменениям и проявляет нежелание адаптироваться, что затрудняет внедрение новых идей и процессов.'
}

  ]
  },

];


export default islands;
