const app = Vue.createApp({
  // data,functions
  // template: "<h2>I am the template</h2>",
  data() {
    return {
      url: "http://www.thenetninja.co.uk",
      showBooks: true,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "assets/1.png",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "assets/2.png",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "brandon sanderson",
          img: "assets/3.png",
          isFav: true,
        },
      ],
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      console.log("you clicked me...");
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      console.log(this.x, this.y);
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});
app.mount("#app");
