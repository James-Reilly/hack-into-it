Faqs = new Mongo.Collection("faqs")

Faqs.attachSchema(new SimpleSchema({
  subject: {
    type: String,
  },
  details: {
    type: String,
    label: "Message"
  },
  response:{
    type: String,
    label: "Response"
  },
  type:{
    type: String,
    label: "Type"
  },
  count:{
    type: Number,
    label: "Count"
  }
}));
