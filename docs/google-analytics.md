# google analytics

our analytics are broken into 4 parts:

1. **discovery**: how a user gets to our website
2. **navigation**: what a user does on our site before beginning registration
3. **registration**: user's journey through the registration flow
4. **sharing**: whether/how user shares our website with others

## discovery

[Good Call Main Site > Web Site Data Excluding localhost Visits > Acquisition > All Traffic > Source/Medium](https://analytics.google.com/analytics/web/?authuser=2#report/trafficsources-all-traffic/a83869855w125032173p129369176/%3F_u.dateOption%3Dlast7days/)

the above link shows a list of places that people were, just before they landed on our site

## navigation

[Good Call Main Site > Web Site Data Excluding localhost Visits > Conversions > Goals > Reverse Goal Path](https://analytics.google.com/analytics/web/?authuser=2#report/conversions-goal-reverse-path/a83869855w125032173p129369176/%3F_u.dateOption%3Dlast7days/)

the end goal for the navigation flow is to reach the `/sign-up` route, the above link shows the 3 previous pages that the user visited before finally arriving at `/sign-up`

## registration

[Good Call Main Site > Web Site Data Excluding localhost Visits > Behavior > Events > Events Flow](https://analytics.google.com/analytics/web/?authuser=2#report/content-events-flow/a83869855w125032173p129369176/%3F_u.dateOption%3Dlast7days/)

the above link shows how users navigated through the registration flow, event-by-event

each event has a `category`, `action`, and sometimes a `label`

there are two `category`s: `user-reg` and `oc-reg`

the former is for the **protect yourself** flow on the `/sign-up` page, the latter is for the **be there for a loved one** flow

there are two possible `action`s for either flow: `leave-1` and `leave-2`. both of the above flows have two parts.

`leave-1` means 'leaving the first part'. a user can leave the first part because they've successfully moved on to the second part, or because they've dropped off. in the above link, you'll be able to tell if a person dropped off, if `leave-1` is the last event in the flow. additionally, you can look at the event's `label` attribute to see which fields were left incomplete. if a field is absent, or present but set to `false`, in `label`, then that was a field that was not completed.

all the above can also be said for `leave-2`.

there is a final event. this event has `category: reg`, `action: success`. this is the event that is fired when a user successfully completes either registration flow.

## sharing

the same link used to track registration events can be used to track sharing events.

there are four possible sharing events:

1. `category: share`, `action: link`: means that the user highlighted the sharing link (we can't know if they copied/pasted it though)
2. `category: share`, `action: email`: means that the user clicked the 'email' sharing btn
3. `category: share`, `action: facebook`: same, but 'facebook' btn
4. `category: share`, `action: twitter`: same, but 'twitter' btn
