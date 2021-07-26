const MapAssignment = (data) => data.map((item) => `I am planning to do ${item.course} form ${item.institute} situated at ${item.city} have contact ${item.mobileNo}`);


console.log(
    MapAssignment([{
            course: "PDAC",
            institute: "PickupBiz",
            mobileNo: 9874561230,
            city: "Nanded",
        },
        {
            course: "Networking",
            institute: "Seed Infotech",
            mobileNo: 9874561555,
            city: "pune",
        },

        {
            course: "DAC ",
            institute: "C-DAC",
            mobileNo: 987456523523,
            city: "HYD",
        },

        {
            course: "HTML CSS",
            institute: "Naresh IT",
            mobileNo: 453636355,
            city: "Mumbai",
        },
    ])
);