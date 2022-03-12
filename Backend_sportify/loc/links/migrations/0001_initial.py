# Generated by Django 3.2.7 on 2022-03-12 06:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='cricket',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default='', max_length=1000)),
                ('link', models.CharField(default='', max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='football',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(default='', max_length=1000)),
                ('link', models.CharField(default='', max_length=1000)),
            ],
        ),
    ]
