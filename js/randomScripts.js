let commands = [
  
    {
      name: "addG",
      desc: "Adds Game to Game List",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "Adds a single game to the Game List",
          example: "$addG GameName"
        },
        
      ]
    },
    {
      name: "addI",
      desc: "Adds an insult to the Insult List",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "Adds a single insult to the Insult List",
          example: "$addG Insult"
        },
        
      ]
    },
    {
      name: "delG",
      desc: "Deletes a game from the Game List",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "Uses an index to choose which game from the list to delete",
          example: "$delG PositiveInteger"
        },
        
      ]
    },
    {
      name: "delI",
      desc: "Deletes an insult from the Insult List",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "Uses an index to choose which insult from the list to delete",
          example: "$delI PositiveInteger"
        }
      ]
    },
    {
      name: "game",
      desc: "Prompts GameMaster to select a random game from the Game List",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "Prompts GameMaster to select a random game from the Game List",
          example: "$game"
        }
      ]
    },
    {
      name: "hello",
      desc: "GameMaster prints a greeting to text channel",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "Sends a simple greeting to text channel",
          example: "$hello"
        }
      ]
    },
    {
      name: "inspire",
      desc: "GameMaster prints an inspiring quote to text channel",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "To receive inspiration",
          example: "$inspire"
        }
      ]
    },
    {
      name: "listG",
      desc: "Prints the Game List to text channel",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "To receive the Game List",
          example: "$listG"
        }
      ]
    },
    {
      name: "listI",
      desc: "Get information about a command",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "To receive the Insult List",
          example: "$listI"
        },
        
      ]
    },
    {
      name: "responding",
      desc: "Changes if GameMaster responds to specific words in text channels",
      category: "Admin",
      permission: "",
      content: [
        {
          usage: "When true GameMaster will respond to key words",
          example: "$responding true"
        },
        {
          usage: "When false GameMaster will not respond to key words",
          example: "$responding false"
        }
      ]
    },
    {
      name: "joinrole",
      desc: "Set a role for users to recieve when they join",
      category: "general",
      permission: "",
      content: [
        {
          usage: "Sets a role for users to gain when they join the server.",
          example: ":?joinrole <@role/ID><br>:?joinrole remove<br>:?joinrole show"
        }
      ]
    },
    {
      name: "leaderboard",
      desc: "Show the leaderboard for this server",
      category: "general",
      permission: "",
      content: [
        {
          usage: "Shows the leaderboard for this server.",
          example: ":?leaderboard"
        },
        {
          usage: "If enabled, shows the weekly leaderboard for this server.",
          example: ":?leaderboard weekly"
        },
      ]
    },
    {
      name: "modifyexp",
      desc: "Add or remove exp from a specific user",
      category: "Donor",
      permission: "",
      content: [
        {
          usage: "Adds or removes exp from the specified user.",
          example: ":?modifyexp <add/remove> <1 - 10000> <@user>"
        }
      ]
    },
    {
      name: "prefix",
      desc: "Change the prefix for the bot",
      category: "general",
      permission: "",
      content: [
        {
          usage: "Changes AmariBot's prefix.",
          example: ":?prefix <prefix>"
        }
      ]
    },
    {
      name: "profile",
      desc: "Chnage the color/opacity/background of the rank card",
      category: "General",
      permission: "",
      content: [
        {
          usage: `Change your profile color to <a style="color:white;">"default"</a> <a style="color:teal;">"teal"</a>, <a style="color:green;">"green"</a>, <a style="color:cyan;">"blue"</a>, <a style="color:purple;">"purple"</a>, <a style="color:pink;">"pink"</a>, <a style="color:yellow;">"yellow"</a>, <a style="color:orange;">"orange"</a>, <a style="color:red;">"red"</a> or <a style="color:gray;">"gray"</a>.`,
          example: ":?profile color default"
        },
        {
          usage: "<code>Donators</code> Change your profile color using hex color codes.",
          example: ":?profile color #ea8465"
        },
        {
          usage: "<code>Donators</code> Change your profile background.",
          example: ":?profile bg"
        },
        {
          usage: "<code>Donators</code> Change your profile's opacity.",
          example: ":?profile opacity <0 - 100>"
        }
      ]
    },
    {
      name: "rank",
      desc: "Check your current rank or another users current rank",
      category: "General",
      permission: "",
      content: [
        {
          usage: "Show your own rank card.",
          example: ":?rank"
        },
        {
          usage: "Shows a user's rank card.",
          example: ":?rank <@user>"
        }
      ]
    },
    {
      name: "reset",
      desc: "Reset user points or server settings",
      category: "general",
      permission: "",
      content: [
        {
          usage: "Resets the specified user's exp.",
          example: ":?reset <@user>"
        },
        {
          usage: "Resets all users exp.",
          example: ":?reset points"
        },
        {
          usage: "Resets all the settings for this server.",
          example: ":?reset settings"
        },
        {
          usage: "Resets all users exp and this server's settings.",
          example: ":?reset all"
        }
      ]
    },
    {
      name: "rlevel",
      desc: "Set up roles to auto assign when users reach a specific level",
      category: "general",
      permission: "",
      content: [
        {
          usage: "Sets a role to be given once a user reaches the specified level.",
          example: ":?rlevel add <level> <@role>"
        },
        {
          usage: "Removes the role set at the specified level.",
          example: ":?rlevel remove <level>"
        },
        {
          usage: "Default Sets roles to accumulate, keeping all roles.",
          example: ":?rlevel accumulate"
        },
        {
          usage: "Sets roles to replace upon the next level role.",
          example: ":?rlevel replace"
        },
        {
          usage: "Shows all roles set to levels.",
          example: ":?rlevel show"
        }
      ]
    },
    {
      name: "settings",
      desc: "Check the servers current settings",
      category: "General",
      permission: "",
      content: [
        {
          usage: "Access AmariBot's settings for this server.",
          example: ":?settings"
        }
      ]
    },
    {
      name: "support",
      desc: "Get a discord link to join our support server",
      category: "General",
      permission: "",
      content: [
        {
          usage: "Get a link to join the support server.",
          example: ":?support"
        }
      ]
    },
    {
      name: "pmulti",
      desc: "Add a multiplier to roles/channels",
      category: "Donor",
      permission: "Owner",
      content: [
        {
          usage: "Sets this server's global multiplier.",
          example: ":?pmulti set <1-100>"
        },
        {
          usage: "Sets different exp rates for each channel or role.",
          example: ":?pmulti add <#channel/@role> <1-100>"
        },
        {
          usage: "Clears a channel or role custom multiplier (resets to current global multiplier).",
          example: ":?pmulti remove <#channel/@role>"
        },
        {
          usage: "Shows all multipliers for channels and roles.",
          example: ":?pmulti show"
        }
      ]
    },
    {
      name: "update",
      desc: "Get information about the latest update",
      category: "General",
      permission: "",
      content: [
        {
          usage: "Get the latest AmariBot update post.",
          example: ":?update"
        }
      ]
    },
    {
      name: "vote",
      desc: "Get a link to upvote for the bot",
      category: "General",
      permission: "",
      content: [
        {
          usage: "Get a link to vote on AmariBot.",
          example: ":?vote"
        }
      ]
    },
    {
      name: "weekly",
      desc: "Weekly command allows you to keep track of exp over a short amount of time",
      category: "general",
      permission: "",
      content: [
        {
          usage: "Turns the weekly leaderboard on or off.",
          example: ":?weekly <on/off>"
        },
        {
          usage: "Announces the Top 3 winners of the week and resets the leaderboard.<br>If unannounced, users exp will continue to accumulate and the leaderboard will not reset.",
          example: ":?weekly winners"
        },
        {
          usage: "If enabled, shows the weekly leaderboard for this server.",
          example: ":?weekly leaderboard"
        }
      ]
    },
    {
      name: "voice",
      desc: "Allows users to earn EXP through voice channels",
      category: "Donor",
      permission: "",
      content: [
        {
          usage: "Enable or Disable Voice Exp (default is disabled).",
          example: ":?voice enable / disable"
        },
        {
          usage: "Exp rate for voice exp (default 1) (exp rate * cooldown).",
          example: ":?voice exp <1-100>"
        },
        {
          usage: "Cooldown for voice exp (in minutes) (default 2).",
          example: ":?voice cooldown <1 - 60>"
        },
      ]
    }
  ]
  
  let adminBtn = document.getElementById('adminCmds');
  //Change button color
  adminBtn.style.backgroundColor = "#ea8465";
  
  //Add commands to html
  let cmdContainer = document.getElementById('commands');
  var content = "";
  let selectedCommands = commands.filter(x => x.category.toLowerCase() === "admin");
  for(let i=0; i < selectedCommands.length; i++){
    let perms = (selectedCommands[i].permission === "") ? "" : `<a class="permissionBlock">${selectedCommands[i].permission}</a>`;
    var usageContent = ""
    for(let j=0; j < selectedCommands[i].content.length; j++){
      usageContent += `${selectedCommands[i].content[j].usage}<br><br>
      <div class="commandUsage"><code>${selectedCommands[i].content[j].example}</code></div><br>
      `
    }
    content += `<div class="commandInfo">
    <code class="commandName" id="${selectedCommands[i].name}_cmd" onclick="copy_command(${selectedCommands[i].name}_cmd)">$${selectedCommands[i].name}</code>
    <a class="commandDesc"> - ${selectedCommands[i].desc}${perms}</a>
    </div>
    <div class="commandContent">
      <p><span style="text-decoration: underline;font-weight:600;">Usage:<br></span></p>
      ${usageContent}
    </div>
    `
  }
  cmdContainer.innerHTML = content;
  
  //Make it so they can be dropdown
  var coll = document.getElementsByClassName("commandInfo");
  var i;
  
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  
  
  