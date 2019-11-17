export const DISHES = [
    {
      id: 0,
      name:'Uthappizza',
      image: '/assets/images/uthappizza.png',
      category: 'mains',
      label:'Hot',
      price:'4.99',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comments : [
          {
           id: 1,
           author: "Maria",
           description: "I love it",
           date: "2019-01-09"
          },
          {
            id: 2,
            author: "Jon",
            description: "I love it",
            date: "2019-01-09"
          }
      ]                        
    },
   {
      id: 1,
      name:'Zucchipakoda',
      image: '/assets/images/zucchipakoda.png',
      category: 'appetizer',
      label:'',
      price:'1.99',
      description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',                   
      comments : [
        {
         id: 3,
         author: "Maria",
         description: "I love it",
         date: "2019-01-09"
        },
        {
          id: 4,
          author: "Jon",
          description: "I love it",
          date: "2019-01-09"
        }
    ] 
     },
   {
      id: 2,
      name:'Vadonut',
      image: '/assets/images/vadonut.png',
      category: 'appetizer',
      label:'New',
      price:'1.99',
      description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
      comments: []                        },
   {
      id: 3,
      name:'ElaiCheese Cake',
      image: '/assets/images/elaicheesecake.png',
      category: 'dessert',
      label:'',
      price:'2.99',
      description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms' ,
      comments: []                       }
   ]; 