import React from 'react'



const commentsData = [
  {
    name: "Shrikant Kushwah",
    text: "Lorem Ipusm dolar sit amet, consecter adip.",
    replies: [
      {
        name: "Shrikant Kushwah",
        text: "Lorem Ipusm dolar sit amet, consecter adip.",
        replies: [
          {
            name: "Shrikant Kushwah",
            text: "Lorem Ipusm dolar sit amet, consecter adip.",
            replies: [
              {
                name: "Shrikant Kushwah",
                text: "Lorem Ipusm dolar sit amet, consecter adip.",
                replies: [
                  {
                    name: "Shrikant Kushwah",
                    text: "Lorem Ipusm dolar sit amet, consecter adip.",
                    replies: [
                      {
                        name: "Shrikant Kushwah",
                        text: "Lorem Ipusm dolar sit amet, consecter adip.",
                        replies: [
                          {
                            name: "Shrikant Kushwah",
                            text: "Lorem Ipusm dolar sit amet, consecter adip.",
                            replies: [
                              {
                                name: "Shrikant Kushwah",
                                text: "Lorem Ipusm dolar sit amet, consecter adip.",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shrikant Kushwah",
    text: "Lorem Ipusm dolar sit amet, consecter adip.",
    replies: [],
  },
  {
    name: "Shrikant Kushwah",
    text: "Lorem Ipusm dolar sit amet, consecter adip.",
    replies: [],
  },
  {
    name: "Shrikant Kushwah",
    text: "Lorem Ipusm dolar sit amet, consecter adip.",
    replies: [],
  },
]


const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
      <img
        className='h-12 w-12' src="https://static.vecteezy.com/system/resources/previews/009/749/751/non_2x/avatar-man-icon-cartoon-male-profile-mascot-illustration-head-face-business-user-logo-free-vector.jpg"
        alt="user"
      />
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p className=''>{text}</p>
      </div>
    </div>)
}


const CommentsList = ({ comments }) => {
  // Do not use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-8'>
        <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ))}


const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;
