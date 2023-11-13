"use client";
//by default all components are server components
//we use client components to use events,effects,states hooks etc

export default function Loading() {
  return (
    <div>loading..</div>
  )
}


// //CLIENT:
// react hooks
// event listeners such as onclick()
// there are custom hooks that depend on state or effects    


// SERVER:
// sensitive info needs to be stored (tokens,API's)
// you need to access backend resources directly  
// there are large dependencies