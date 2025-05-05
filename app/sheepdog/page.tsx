"use client"

import { SheepDogTabs } from "./components/SheepDogTabs"

export default function SheepdogPage() {
  return (
    <div className="mb-4 space-y-8 px-4">
      <h1 className="font-bubbles text-4xl">SheepDog</h1>
      <p className="max-w-[560px] text-lg">The SheepDog is a guardian of the herd. You can stake your SHEEP to the SheepDog to
        earn rewards. The SheepDog will also help you to protect your herd from the wolves. But the sheepDog needs to
        eat, so when withdrawing you need to pay the dog rent which is 10S per day, paid upon withdrawal.<br />To protect
        the sheepdog from people playing with it, you first need to put your dog to sleep for 2 days then you can
        withdraw. Once you trigger this you won't be able to deposit more SHEEP into him until you actually withdraw. If
        you don't withdraw within 2 days after dog asleep, you will need to put him to sleep again.</p>
      <div className="flex justify-center">
        <SheepDogTabs />
      </div>
    </div>
  )
}
